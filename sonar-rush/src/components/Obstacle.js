import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { COLORS } from '../engine/constants';

export default function Obstacle({ obstacle }) {
  if (!obstacle.revealed) return null;

  return (
    <View
      style={[
        styles.box,
        {
          left: obstacle.x,
          top: obstacle.y,
          width: obstacle.width,
          height: obstacle.height,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    backgroundColor: COLORS.obstacleGlow,
    borderWidth: 2,
    borderColor: COLORS.obstacle,
    ...Platform.select({
      web: { boxShadow: `0 0 12px ${COLORS.obstacle}` },
      default: {
        shadowColor: COLORS.obstacle,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 12,
        elevation: 8,
      },
    }),
    zIndex: 2,
  },
});
