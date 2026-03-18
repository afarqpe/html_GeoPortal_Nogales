import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { SONAR_RADIUS, SONAR_WAVE_DURATION, COLORS } from '../engine/constants';

export default function SonarWave({ x, y, maxRadius }) {
  const targetRadius = maxRadius || SONAR_RADIUS;
  const radius = useSharedValue(0);
  const opacity = useSharedValue(0.9);

  useEffect(() => {
    radius.value = withTiming(targetRadius, {
      duration: SONAR_WAVE_DURATION,
      easing: Easing.out(Easing.quad),
    });
    opacity.value = withTiming(0, {
      duration: SONAR_WAVE_DURATION,
      easing: Easing.in(Easing.quad),
    });
  }, []);

  const ring = useAnimatedStyle(() => ({
    left: x - radius.value,
    top: y - radius.value,
    width: radius.value * 2,
    height: radius.value * 2,
    borderRadius: radius.value,
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          borderWidth: 2,
          borderColor: COLORS.sonar,
          zIndex: 3,
        },
        ring,
      ]}
    />
  );
}
