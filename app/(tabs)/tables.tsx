import { useMemo, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { TableForm } from '@/components/tables/TableForm';
import { TableList } from '@/components/tables/TableList';
import { Button } from '@/components/ui/Button';
import { useGuests } from '@/hooks/useGuests';
import { useTables } from '@/hooks/useTables';

export default function TablesScreen() {
  const { guests, assignGuestToTable } = useGuests();
  const { tables, addTable, updateTable, removeTable } = useTables(guests);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const editingTable = useMemo(() => tables.find((table) => table.id === editingId) ?? null, [editingId, tables]);

  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Text className="text-2xl font-bold text-textPrimary">Mesas</Text>

      <Button
        title={isFormOpen ? 'Cancelar' : 'Agregar mesa'}
        onPress={() => {
          setEditingId(null);
          setIsFormOpen((prev) => !prev);
        }}
      />

      {isFormOpen ? (
        <TableForm
          initialTable={editingTable}
          onSubmit={(payload) => {
            if (editingTable) {
              updateTable(editingTable.id, payload);
            } else {
              addTable(payload);
            }
            setEditingId(null);
            setIsFormOpen(false);
          }}
        />
      ) : null}

      <TableList
        tables={tables}
        guests={guests}
        onEdit={(id) => {
          setEditingId(id);
          setIsFormOpen(true);
        }}
        onDelete={removeTable}
        onAssignGuest={assignGuestToTable}
      />
    </ScrollView>
  );
}
