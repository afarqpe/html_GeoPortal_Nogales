import React, { useState, useCallback } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import GameScreen from './src/screens/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen';
import AdPlaceholder from './src/components/AdPlaceholder';

export default function App() {
  const [state, setState] = useState({
    screen: 'playing',
    score: 0,
    deaths: 0,
  });

  const handleGameOver = useCallback((finalScore) => {
    setState((prev) => ({
      screen: 'gameover',
      score: finalScore,
      deaths: prev.deaths + 1,
    }));
  }, []);

  const handleRestart = useCallback(() => {
    setState((prev) => ({ ...prev, screen: 'playing' }));
  }, []);

  return (
    <GestureHandlerRootView style={styles.root}>
      <StatusBar hidden />
      <View style={styles.game}>
        {state.screen === 'playing' ? (
          <GameScreen key={state.deaths} onGameOver={handleGameOver} />
        ) : (
          <GameOverScreen
            score={state.score}
            deathCount={state.deaths}
            onRestart={handleRestart}
          />
        )}
      </View>
      <AdPlaceholder type="banner" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#000' },
  game: { flex: 1 },
});
