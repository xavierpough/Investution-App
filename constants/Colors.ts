/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',           // Dark text for readability on light background
    background: '#F0F4F7',     // Light background color
    tint: '#00A3FF',           // Bright blue tint color for buttons and active states
    icon: '#687076',           // Grey icon color for default state
    tabIconDefault: '#687076', // Grey tab icon color for default state
    tabIconSelected: '#00A3FF',// Blue tab icon color for selected state
    cardBackground: '#FFFFFF', // White card background
    cardBorder: '#E5E7EB',     // Light grey border for cards
    accent: '#3C82F6',         // Accent color for highlights
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
