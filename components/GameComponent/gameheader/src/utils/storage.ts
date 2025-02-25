/**
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveGameState = async (state) => {
  try {
    await AsyncStorage.setItem('gameState', JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save game state:', error);
  }
};

export const loadGameState = async () => {
  try {
    const savedState = await AsyncStorage.getItem('gameState');
    return savedState ? JSON.parse(savedState) : null;
  } catch (error) {
    console.error('Failed to load game state:', error);
    return null;
  }
};
*/