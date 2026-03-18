import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@sonar_rush_high_score';

export async function getHighScore() {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? parseInt(raw, 10) : 0;
  } catch {
    return 0;
  }
}

export async function saveHighScore(score) {
  try {
    await AsyncStorage.setItem(KEY, String(score));
  } catch {
    /* persist failure is non-critical */
  }
}
