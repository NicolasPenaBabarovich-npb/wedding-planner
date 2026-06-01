import { Pressable, Text } from 'react-native';
import { THEME_COLORS } from '@/constants/colors';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md';
};

export function Button({ title, onPress, variant = 'primary', size = 'md' }: ButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      onPress={onPress}
      className={`items-center justify-center rounded-xl ${size === 'sm' ? 'px-3 py-2' : 'px-4 py-3'}`}
      style={{
        backgroundColor: isPrimary ? THEME_COLORS.primary : THEME_COLORS.background,
        borderWidth: 1,
        borderColor: THEME_COLORS.primary,
      }}>
      <Text style={{ color: isPrimary ? THEME_COLORS.white : THEME_COLORS.primary, fontWeight: '700' }}>{title}</Text>
    </Pressable>
  );
}
