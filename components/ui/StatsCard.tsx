import type { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { THEME_COLORS } from '@/constants/colors';

type StatsCardProps = {
  title: string;
  value: number;
  icon: ReactNode;
  color: 'primary' | 'success' | 'warning' | 'danger';
};

const BG_COLORS = {
  primary: THEME_COLORS.primary,
  success: THEME_COLORS.success,
  warning: THEME_COLORS.warning,
  danger: THEME_COLORS.danger,
} as const;

export function StatsCard({ title, value, icon, color }: StatsCardProps) {
  return (
    <View className="min-w-[47%] flex-1 rounded-2xl bg-white p-4 shadow-sm">
      <View className="mb-3 h-9 w-9 items-center justify-center rounded-full" style={{ backgroundColor: BG_COLORS[color] }}>
        {icon}
      </View>
      <Text className="text-sm text-textMuted">{title}</Text>
      <Text className="mt-1 text-2xl font-bold text-textPrimary">{value}</Text>
    </View>
  );
}
