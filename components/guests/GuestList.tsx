import { Text, View } from 'react-native';
import { GuestCard } from '@/components/guests/GuestCard';
import type { Guest } from '@/lib/types';

type GuestListProps = {
  guests: Guest[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export function GuestList({ guests, onEdit, onDelete }: GuestListProps) {
  if (guests.length === 0) {
    return (
      <View className="rounded-2xl bg-white p-4">
        <Text className="text-textMuted">No hay invitados para este filtro.</Text>
      </View>
    );
  }

  return (
    <View className="gap-3">
      {guests.map((guest) => (
        <GuestCard key={guest.id} guest={guest} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </View>
  );
}
