import { useState } from 'react';
import type { Guest, GuestInput } from '@/lib/types';

const INITIAL_GUESTS: Guest[] = [
  {
    id: 'g_1',
    name: 'María González',
    email: 'maria@example.com',
    status: 'confirmed',
    category: 'family',
    table_id: 't_1',
    created_at: '2026-01-05T12:00:00.000Z',
  },
  {
    id: 'g_2',
    name: 'Juan Pérez',
    phone: '+56911111111',
    status: 'pending',
    category: 'friends',
    created_at: '2026-01-06T12:00:00.000Z',
  },
  {
    id: 'g_3',
    name: 'Carolina Rojas',
    status: 'declined',
    category: 'work',
    created_at: '2026-01-07T12:00:00.000Z',
  },
];

export function useGuests() {
  const [guests, setGuests] = useState<Guest[]>(INITIAL_GUESTS);

  const addGuest = (input: GuestInput) => {
    setGuests((prev) => [
      {
        id: `g_${Date.now()}`,
        created_at: new Date().toISOString(),
        ...input,
      },
      ...prev,
    ]);
  };

  const updateGuest = (id: string, input: GuestInput) => {
    setGuests((prev) => prev.map((guest) => (guest.id === id ? { ...guest, ...input } : guest)));
  };

  const removeGuest = (id: string) => {
    setGuests((prev) => prev.filter((guest) => guest.id !== id));
  };

  const assignGuestToTable = (guestId: string, tableId?: string) => {
    setGuests((prev) =>
      prev.map((guest) => {
        if (guest.id !== guestId) return guest;
        return { ...guest, table_id: tableId };
      })
    );
  };

  return { guests, addGuest, updateGuest, removeGuest, assignGuestToTable };
}
