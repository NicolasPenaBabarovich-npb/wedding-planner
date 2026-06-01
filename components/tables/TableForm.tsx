import { useMemo, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from '@/components/ui/Button';
import type { Table, TableInput } from '@/lib/types';

type TableFormProps = {
  initialTable?: Table | null;
  onSubmit: (input: TableInput) => void;
};

export function TableForm({ initialTable, onSubmit }: TableFormProps) {
  const [name, setName] = useState(initialTable?.name ?? '');
  const [capacity, setCapacity] = useState(initialTable?.capacity ? String(initialTable.capacity) : '8');
  const parsedCapacity = Number(capacity);
  const isValid = useMemo(() => name.trim().length > 0 && Number.isInteger(parsedCapacity) && parsedCapacity > 0, [name, parsedCapacity]);

  return (
    <View className="gap-3 rounded-2xl bg-white p-4 shadow-sm">
      <Text className="text-lg font-semibold text-textPrimary">{initialTable ? 'Editar mesa' : 'Nueva mesa'}</Text>
      <TextInput className="rounded-xl border border-primarySoft px-3 py-2 text-textPrimary" placeholder="Nombre de mesa" value={name} onChangeText={setName} />
      <TextInput className="rounded-xl border border-primarySoft px-3 py-2 text-textPrimary" placeholder="Capacidad" keyboardType="number-pad" value={capacity} onChangeText={setCapacity} />
      <Button
        title={initialTable ? 'Guardar cambios' : 'Crear mesa'}
        onPress={() => {
          if (!isValid) return;

          onSubmit({
            name: name.trim(),
            capacity: parsedCapacity,
          });
        }}
      />
    </View>
  );
}
