import { Text, View } from 'react-native';
import { TableCard } from '@/components/tables/TableCard';
import type { Guest, Table } from '@/lib/types';

type TableListProps = {
  tables: Table[];
  guests: Guest[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onAssignGuest: (guestId: string, tableId: string) => void;
};

export function TableList({ tables, guests, onEdit, onDelete, onAssignGuest }: TableListProps) {
  if (tables.length === 0) {
    return (
      <View className="rounded-2xl bg-white p-4">
        <Text className="text-textMuted">Aún no hay mesas creadas.</Text>
      </View>
    );
  }

  return (
    <View className="gap-3">
      {tables.map((table) => (
        <TableCard key={table.id} table={table} guests={guests} onEdit={onEdit} onDelete={onDelete} onAssignGuest={onAssignGuest} />
      ))}
    </View>
  );
}
