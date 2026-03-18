import React, { useState, useRef, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  runOnJS,
} from 'react-native-reanimated';
import Player from '../components/Player';
import Obstacle from '../components/Obstacle';
import SonarWave from '../components/SonarWave';
import { checkCollision } from '../engine/collision';
import {
  PLAYER_SIZE,
  BASE_SPEED,
  SPEED_INCREMENT,
  SONAR_RADIUS,
  SONAR_REVEAL_DURATION,
  SONAR_WAVE_DURATION,
  OBSTACLE_MIN_GAP,
  OBSTACLE_MAX_GAP,
  OBSTACLE_MIN_WIDTH,
  OBSTACLE_MAX_WIDTH,
  OBSTACLE_MIN_HEIGHT,
  OBSTACLE_MAX_HEIGHT,
  COLORS,
} from '../engine/constants';

export default function GameScreen({ onGameOver }) {
  const { width, height } = useWindowDimensions();
  const PLAYER_Y = height - 150;

  const playerX = useSharedValue(width / 2);

  const [, forceRender] = useState(0);
  const [sonarWaves, setSonarWaves] = useState([]);
  const [displayScore, setDisplayScore] = useState(0);

  const game = useRef({
    running: true,
    score: 0,
    speed: BASE_SPEED,
    obstacles: [],
    nextSpawnAt: 0,
    frameId: null,
  }).current;

  /* ─── sonar emit ─── */
  const emitSonar = useCallback(() => {
    const px = playerX.value;
    const wave = { id: Date.now(), x: px, y: PLAYER_Y };
    setSonarWaves((prev) => [...prev, wave]);

    game.obstacles.forEach((obs) => {
      const cx = obs.x + obs.width / 2;
      const cy = obs.y + obs.height / 2;
      if (Math.hypot(cx - px, cy - PLAYER_Y) < SONAR_RADIUS) {
        obs.revealed = true;
        obs.revealExpiry = Date.now() + SONAR_REVEAL_DURATION;
      }
    });

    setTimeout(() => {
      setSonarWaves((prev) => prev.filter((w) => w.id !== wave.id));
    }, SONAR_WAVE_DURATION + 100);
  }, [PLAYER_Y, game, playerX]);

  /* ─── gestures ─── */
  const pan = Gesture.Pan()
    .activeOffsetX([-5, 5])
    .onUpdate((e) => {
      'worklet';
      const next = playerX.value + e.changeX;
      playerX.value = Math.max(
        PLAYER_SIZE / 2,
        Math.min(width - PLAYER_SIZE / 2, next),
      );
    });

  const tap = Gesture.Tap().onEnd(() => {
    'worklet';
    runOnJS(emitSonar)();
  });

  const gesture = Gesture.Simultaneous(pan, tap);

  /* ─── game loop ─── */
  useEffect(() => {
    let prev = performance.now();

    const spawnObstacle = (now) => {
      const w =
        OBSTACLE_MIN_WIDTH +
        Math.random() * (OBSTACLE_MAX_WIDTH - OBSTACLE_MIN_WIDTH);
      const h =
        OBSTACLE_MIN_HEIGHT +
        Math.random() * (OBSTACLE_MAX_HEIGHT - OBSTACLE_MIN_HEIGHT);
      game.obstacles.push({
        id: now + Math.random(),
        x: Math.random() * (width - w),
        y: -h - 10,
        width: w,
        height: h,
        revealed: false,
        revealExpiry: 0,
      });
      const gap = OBSTACLE_MAX_GAP - game.score * 5;
      game.nextSpawnAt = now + Math.max(OBSTACLE_MIN_GAP, gap);
    };

    const loop = (now) => {
      if (!game.running) return;

      const dt = Math.min((now - prev) / 16.667, 3);
      prev = now;

      game.score += dt * 0.1;
      game.speed = BASE_SPEED + game.score * SPEED_INCREMENT;

      if (now >= game.nextSpawnAt) spawnObstacle(now);

      const currentMs = Date.now();
      game.obstacles.forEach((o) => {
        o.y += game.speed * dt;
        if (o.revealed && currentMs >= o.revealExpiry) o.revealed = false;
      });
      game.obstacles = game.obstacles.filter((o) => o.y < height + 60);

      const px = playerX.value;
      for (const o of game.obstacles) {
        if (checkCollision(px, PLAYER_Y, PLAYER_SIZE / 2, o)) {
          game.running = false;
          onGameOver(Math.floor(game.score));
          return;
        }
      }

      setDisplayScore(Math.floor(game.score));
      forceRender((t) => t + 1);
      game.frameId = requestAnimationFrame(loop);
    };

    game.frameId = requestAnimationFrame(loop);
    return () => {
      game.running = false;
      cancelAnimationFrame(game.frameId);
    };
  }, [width, height, PLAYER_Y, game, onGameOver, playerX]);

  return (
    <GestureDetector gesture={gesture}>
      <View style={styles.container}>
        <Text style={styles.score}>{displayScore}</Text>

        {game.obstacles.map((o) => (
          <Obstacle key={o.id} obstacle={o} />
        ))}

        {sonarWaves.map((w) => (
          <SonarWave key={w.id} x={w.x} y={w.y} />
        ))}

        <Player x={playerX} y={PLAYER_Y} size={PLAYER_SIZE} />

        <Text style={styles.hint}>DRAG to move · TAP to sonar</Text>
      </View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    overflow: 'hidden',
  },
  score: {
    position: 'absolute',
    top: 60,
    width: '100%',
    textAlign: 'center',
    color: COLORS.textPrimary,
    fontSize: 48,
    fontWeight: '700',
    zIndex: 10,
    opacity: 0.8,
  },
  hint: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    textAlign: 'center',
    color: '#444',
    fontSize: 13,
    letterSpacing: 1,
    zIndex: 10,
  },
});
