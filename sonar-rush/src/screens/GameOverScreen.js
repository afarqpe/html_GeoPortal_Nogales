import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { getHighScore, saveHighScore } from '../utils/storage';
import AdPlaceholder from '../components/AdPlaceholder';
import { COLORS } from '../engine/constants';

export default function GameOverScreen({ score, deathCount, onRestart }) {
  const [highScore, setHigh] = useState(0);
  const [isRecord, setIsRecord] = useState(false);

  useEffect(() => {
    (async () => {
      const saved = await getHighScore();
      if (score > saved) {
        await saveHighScore(score);
        setHigh(score);
        setIsRecord(true);
      } else {
        setHigh(saved);
      }
    })();
  }, [score]);

  const showInterstitial = deathCount > 0 && deathCount % 3 === 0;

  return (
    <View style={styles.container}>
      {showInterstitial && <AdPlaceholder type="interstitial" />}

      <Text style={styles.title}>GAME OVER</Text>

      <Text style={styles.label}>Puntuación</Text>
      <Text style={styles.scoreValue}>{score}</Text>

      {isRecord && <Text style={styles.record}>¡NUEVO RÉCORD!</Text>}

      <Text style={styles.highLabel}>Mejor Puntuación</Text>
      <Text style={styles.highValue}>{highScore}</Text>

      <TouchableOpacity style={styles.button} onPress={onRestart} activeOpacity={0.7}>
        <Text style={styles.buttonText}>JUGAR DE NUEVO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    color: COLORS.obstacle,
    fontSize: 48,
    fontWeight: '800',
    marginBottom: 36,
    ...Platform.select({
      web: { textShadow: `0 0 24px ${COLORS.obstacle}` },
      default: {
        textShadowColor: COLORS.obstacle,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 24,
      },
    }),
  },
  label: { color: COLORS.textPrimary, fontSize: 16, opacity: 0.7 },
  scoreValue: {
    color: COLORS.textPrimary,
    fontSize: 72,
    fontWeight: '700',
    marginBottom: 8,
  },
  record: {
    color: COLORS.accent,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    ...Platform.select({
      web: { textShadow: `0 0 12px ${COLORS.accent}` },
      default: {
        textShadowColor: COLORS.accent,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 12,
      },
    }),
  },
  highLabel: { color: COLORS.textSecondary, fontSize: 14, marginTop: 8 },
  highValue: {
    color: COLORS.textSecondary,
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 40,
  },
  button: {
    borderWidth: 2,
    borderColor: COLORS.textPrimary,
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 30,
  },
  buttonText: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
