import { Text, View } from 'react-native';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { Guest } from '@/lib/types';

type GuestCardProps = {
  guest: Guest;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export function GuestCard({ guest, onEdit, onDelete }: GuestCardProps) {
  return (
    <View className="rounded-2xl bg-white p-4 shadow-sm">
      <View className="mb-2 flex-row items-start justify-between gap-3">
        <View className="flex-1">
          <Text className="text-lg font-semibold text-textPrimary">{guest.name}</Text>
          <Text className="text-sm text-textMuted">Categoría: {guest.category}</Text>
          <Text className="text-sm text-textMuted">Mesa: {guest.table_id ? `Mesa ${guest.table_id}` : 'Sin asignar'}</Text>
        </View>
        <Badge status={guest.status} />
      </View>

      <View className="mt-2 flex-row gap-2">
        <View className="flex-1">
          <Button title="Editar" variant="outline" size="sm" onPress={() => onEdit(guest.id)} />
        </View>
        <View className="flex-1">
          <Button title="Eliminar" size="sm" onPress={() => onDelete(guest.id)} />
        </View>
      </View>
    </View>
  );
}
