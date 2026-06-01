import { useMemo, useState } from 'react';
import type { Guest, Table, TableInput } from '@/lib/types';

const INITIAL_TABLES: Table[] = [
  {
    id: 't_1',
    name: 'Mesa Novios',
    capacity: 8,
    created_at: '2026-01-05T12:00:00.000Z',
  },
  {
    id: 't_2',
    name: 'Mesa Familia',
    capacity: 10,
    created_at: '2026-01-06T12:00:00.000Z',
  },
];

export function useTables(guests: Guest[] = []) {
  const [tables, setTables] = useState<Table[]>(INITIAL_TABLES);

  const addTable = (input: TableInput) => {
    setTables((prev) => [
      {
        id: `t_${Date.now()}`,
        created_at: new Date().toISOString(),
        ...input,
      },
      ...prev,
    ]);
  };

  const updateTable = (id: string, input: TableInput) => {
    setTables((prev) => prev.map((table) => (table.id === id ? { ...table, ...input } : table)));
  };

  const removeTable = (id: string) => {
    setTables((prev) => prev.filter((table) => table.id !== id));
  };

  const totalCapacity = useMemo(() => tables.reduce((acc, table) => acc + table.capacity, 0), [tables]);
  const assignedGuests = useMemo(() => guests.filter((guest) => guest.table_id && guest.status === 'confirmed').length, [guests]);

  return { tables, addTable, updateTable, removeTable, totalCapacity, assignedGuests };
}
