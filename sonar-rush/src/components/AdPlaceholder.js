import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../engine/constants';

/**
 * Drop-in placeholder for AdMob ads.
 *
 * To integrate real ads later:
 *   npm install react-native-google-mobile-ads
 *
 * Banner  → replace the <View> below with <BannerAd unitId={...} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
 * Interstitial → load and show via InterstitialAd.createForAdRequest(unitId) each 3 deaths.
 */
export default function AdPlaceholder({ type = 'banner' }) {
  if (type === 'interstitial') return null;

  return (
    <View style={styles.banner}>
      <Text style={styles.label}>AD SPACE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 50,
    backgroundColor: COLORS.adBg,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  label: { color: '#555', fontSize: 12, letterSpacing: 2 },
});
