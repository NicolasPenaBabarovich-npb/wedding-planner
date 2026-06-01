import { ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatsCard } from '@/components/ui/StatsCard';
import { useGuests } from '@/hooks/useGuests';
import { useTables } from '@/hooks/useTables';

export default function DashboardScreen() {
  const { guests } = useGuests();
  const { tables, totalCapacity, assignedGuests } = useTables(guests);

  const confirmed = guests.filter((guest) => guest.status === 'confirmed').length;
  const pending = guests.filter((guest) => guest.status === 'pending').length;
  const declined = guests.filter((guest) => guest.status === 'declined').length;
  const occupancy = totalCapacity > 0 ? Math.round((assignedGuests / totalCapacity) * 100) : 0;

  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Text className="text-2xl font-bold text-textPrimary">Dashboard</Text>
      <View className="flex-row flex-wrap gap-3">
        <StatsCard title="Invitados" value={guests.length} icon={<Ionicons name="people" size={18} color="#fff" />} color="primary" />
        <StatsCard title="Confirmados" value={confirmed} icon={<Ionicons name="checkmark-circle" size={18} color="#fff" />} color="success" />
        <StatsCard title="Pendientes" value={pending} icon={<Ionicons name="time" size={18} color="#fff" />} color="warning" />
        <StatsCard title="Rechazados" value={declined} icon={<Ionicons name="close-circle" size={18} color="#fff" />} color="danger" />
      </View>

      <View className="rounded-2xl bg-white p-4 shadow-sm">
        <Text className="text-lg font-semibold text-textPrimary">Mesas</Text>
        <Text className="mt-2 text-textMuted">Total de mesas: {tables.length}</Text>
        <Text className="text-textMuted">Capacidad total: {totalCapacity}</Text>
        <Text className="text-textMuted">Invitados asignados: {assignedGuests}</Text>
        <Text className="mt-1 text-base font-semibold text-primary">Ocupación: {occupancy}%</Text>
      </View>
    </ScrollView>
  );
}
