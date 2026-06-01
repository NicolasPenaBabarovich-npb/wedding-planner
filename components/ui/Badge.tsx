import { Text, View } from 'react-native';
import { THEME_COLORS } from '@/constants/colors';
import type { GuestStatus } from '@/lib/types';

type BadgeProps = {
  status: GuestStatus;
};

const STATUS_LABELS: Record<GuestStatus, string> = {
  pending: 'Pendiente',
  confirmed: 'Confirmado',
  declined: 'Rechazado',
};

const STATUS_COLORS: Record<GuestStatus, string> = {
  pending: THEME_COLORS.warning,
  confirmed: THEME_COLORS.success,
  declined: THEME_COLORS.danger,
};

export function Badge({ status }: BadgeProps) {
  return (
    <View className="rounded-full px-3 py-1" style={{ backgroundColor: `${STATUS_COLORS[status]}22` }}>
      <Text className="text-xs font-semibold" style={{ color: STATUS_COLORS[status] }}>
        {STATUS_LABELS[status]}
      </Text>
    </View>
  );
}
