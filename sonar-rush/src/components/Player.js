import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { COLORS } from '../engine/constants';

export default function Player({ x, y, size }) {
  const half = size / 2;

  const animatedStyle = useAnimatedStyle(() => ({
    left: x.value - half,
    top: y - half,
  }));

  return (
    <Animated.View style={[styles.wrapper, animatedStyle, { width: size, height: size }]}>
      {/* Outer glow */}
      <View
        style={[
          styles.glow,
          {
            width: size * 2.2,
            height: size * 2.2,
            borderRadius: size * 1.1,
            marginLeft: -size * 0.6,
            marginTop: -size * 0.6,
          },
        ]}
      />
      {/* Core sphere */}
      <View style={[styles.core, { width: size, height: size, borderRadius: half }]} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    zIndex: 5,
  },
  core: {
    backgroundColor: COLORS.player,
    ...Platform.select({
      web: { boxShadow: `0 0 20px ${COLORS.player}` },
      default: {
        shadowColor: COLORS.player,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 12,
      },
    }),
  },
  glow: {
    position: 'absolute',
    backgroundColor: COLORS.playerGlow,
  },
});
