import { useMemo, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from '@/components/ui/Button';
import type { Guest, GuestCategory, GuestInput, GuestStatus } from '@/lib/types';

type GuestFormProps = {
  initialGuest?: Guest | null;
  onSubmit: (input: GuestInput) => void;
};

const CATEGORIES: GuestCategory[] = ['family', 'friends', 'work', 'other'];
const STATUSES: GuestStatus[] = ['pending', 'confirmed', 'declined'];

export function GuestForm({ initialGuest, onSubmit }: GuestFormProps) {
  const [name, setName] = useState(initialGuest?.name ?? '');
  const [email, setEmail] = useState(initialGuest?.email ?? '');
  const [phone, setPhone] = useState(initialGuest?.phone ?? '');
  const [dietaryRestrictions, setDietaryRestrictions] = useState(initialGuest?.dietary_restrictions ?? '');
  const [status, setStatus] = useState<GuestStatus>(initialGuest?.status ?? 'pending');
  const [category, setCategory] = useState<GuestCategory>(initialGuest?.category ?? 'family');

  const isValid = useMemo(() => name.trim().length > 1, [name]);

  return (
    <View className="gap-3 rounded-2xl bg-white p-4 shadow-sm">
      <Text className="text-lg font-semibold text-textPrimary">{initialGuest ? 'Editar invitado' : 'Nuevo invitado'}</Text>

      <TextInput className="rounded-xl border border-primarySoft px-3 py-2 text-textPrimary" placeholder="Nombre" value={name} onChangeText={setName} />
      <TextInput className="rounded-xl border border-primarySoft px-3 py-2 text-textPrimary" placeholder="Email (opcional)" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TextInput className="rounded-xl border border-primarySoft px-3 py-2 text-textPrimary" placeholder="Teléfono (opcional)" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput className="rounded-xl border border-primarySoft px-3 py-2 text-textPrimary" placeholder="Restricciones alimentarias (opcional)" value={dietaryRestrictions} onChangeText={setDietaryRestrictions} />

      <View className="gap-2">
        <Text className="font-medium text-textPrimary">Estado</Text>
        <View className="flex-row flex-wrap gap-2">
          {STATUSES.map((item) => (
            <Button key={item} title={item} variant={item === status ? 'primary' : 'outline'} size="sm" onPress={() => setStatus(item)} />
          ))}
        </View>
      </View>

      <View className="gap-2">
        <Text className="font-medium text-textPrimary">Categoría</Text>
        <View className="flex-row flex-wrap gap-2">
          {CATEGORIES.map((item) => (
            <Button key={item} title={item} variant={item === category ? 'primary' : 'outline'} size="sm" onPress={() => setCategory(item)} />
          ))}
        </View>
      </View>

      <Button
        title={initialGuest ? 'Guardar cambios' : 'Crear invitado'}
        onPress={() => {
          if (!isValid) return;

          onSubmit({
            name: name.trim(),
            email: email.trim() || undefined,
            phone: phone.trim() || undefined,
            dietary_restrictions: dietaryRestrictions.trim() || undefined,
            status,
            category,
            table_id: initialGuest?.table_id,
          });
        }}
      />
    </View>
  );
}
