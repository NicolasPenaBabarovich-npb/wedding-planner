export type GuestStatus = 'pending' | 'confirmed' | 'declined';
export type GuestCategory = 'family' | 'friends' | 'work' | 'other';

export type Guest = {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  status: GuestStatus;
  dietary_restrictions?: string;
  category: GuestCategory;
  table_id?: string;
  created_at: string;
};

export type Table = {
  id: string;
  name: string;
  capacity: number;
  guests?: Guest[];
  created_at: string;
};

export type GuestInput = Omit<Guest, 'id' | 'created_at'>;
export type TableInput = Omit<Table, 'id' | 'created_at' | 'guests'>;
