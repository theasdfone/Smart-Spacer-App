/**
import Sound from 'react-native-sound';

export const levelUpSound = new Sound('level_up.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) console.error('Failed to load level-up sound:', error);
});

export const itemDrawSound = new Sound('item_draw.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) console.error('Failed to load item-draw sound:', error);
});

export const playSound = (sound) => {
  sound.play((success) => {
    if (!success) console.error('Failed to play sound');
  });
};
*/