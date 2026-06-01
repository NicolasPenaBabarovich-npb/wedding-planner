import { Text, View } from 'react-native';
import { Button } from '@/components/ui/Button';
import type { Guest, Table } from '@/lib/types';

type TableCardProps = {
  table: Table;
  guests: Guest[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onAssignGuest: (guestId: string, tableId: string) => void;
};

export function TableCard({ table, guests, onEdit, onDelete, onAssignGuest }: TableCardProps) {
  const assigned = guests.filter((guest) => guest.table_id === table.id);
  const confirmedAvailable = guests.filter((guest) => guest.status === 'confirmed' && (!guest.table_id || guest.table_id !== table.id));
  const occupancy = table.capacity > 0 ? Math.round((assigned.length / table.capacity) * 100) : 0;

  return (
    <View className="rounded-2xl bg-white p-4 shadow-sm">
      <Text className="text-lg font-semibold text-textPrimary">{table.name}</Text>
      <Text className="text-sm text-textMuted">Capacidad: {table.capacity}</Text>
      <Text className="text-sm text-textMuted">Invitados asignados: {assigned.length}</Text>
      <Text className="mb-3 text-sm text-primary">Ocupación: {occupancy}%</Text>

      <View className="gap-1">
        {assigned.length === 0 ? (
          <Text className="text-sm text-textMuted">Sin invitados asignados.</Text>
        ) : (
          assigned.map((guest) => (
            <Text key={guest.id} className="text-sm text-textPrimary">• {guest.name}</Text>
          ))
        )}
      </View>

      {confirmedAvailable[0] ? (
        <View className="mt-3">
          <Button title={`Asignar ${confirmedAvailable[0].name}`} size="sm" variant="outline" onPress={() => onAssignGuest(confirmedAvailable[0].id, table.id)} />
        </View>
      ) : null}

      <View className="mt-3 flex-row gap-2">
        <View className="flex-1">
          <Button title="Editar" variant="outline" size="sm" onPress={() => onEdit(table.id)} />
        </View>
        <View className="flex-1">
          <Button title="Eliminar" size="sm" onPress={() => onDelete(table.id)} />
        </View>
      </View>
    </View>
  );
}
