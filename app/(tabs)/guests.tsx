import { useMemo, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { GuestForm } from '@/components/guests/GuestForm';
import { GuestList } from '@/components/guests/GuestList';
import { Button } from '@/components/ui/Button';
import { useGuests } from '@/hooks/useGuests';
import type { GuestStatus } from '@/lib/types';

export default function GuestsScreen() {
  const { guests, addGuest, updateGuest, removeGuest } = useGuests();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | GuestStatus>('all');

  const editingGuest = useMemo(() => guests.find((guest) => guest.id === editingId) ?? null, [editingId, guests]);
  const filteredGuests = useMemo(
    () => (filter === 'all' ? guests : guests.filter((guest) => guest.status === filter)),
    [filter, guests]
  );

  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Text className="text-2xl font-bold text-textPrimary">Invitados</Text>

      <View className="flex-row flex-wrap gap-2">
        {(['all', 'confirmed', 'pending', 'declined'] as const).map((item) => (
          <Button
            key={item}
            title={item === 'all' ? 'Todos' : item}
            variant={filter === item ? 'primary' : 'outline'}
            onPress={() => setFilter(item)}
            size="sm"
          />
        ))}
      </View>

      <Button
        title={isFormOpen ? 'Cancelar' : 'Agregar invitado'}
        onPress={() => {
          setEditingId(null);
          setIsFormOpen((prev) => !prev);
        }}
      />

      {isFormOpen ? (
        <GuestForm
          initialGuest={editingGuest}
          onSubmit={(payload) => {
            if (editingGuest) {
              updateGuest(editingGuest.id, payload);
            } else {
              addGuest(payload);
            }
            setEditingId(null);
            setIsFormOpen(false);
          }}
        />
      ) : null}

      <GuestList
        guests={filteredGuests}
        onEdit={(id) => {
          setEditingId(id);
          setIsFormOpen(true);
        }}
        onDelete={removeGuest}
      />
    </ScrollView>
  );
}
