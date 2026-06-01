import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { Button } from '@/components/ui/Button';

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center gap-4 bg-background px-6">
      <Text className="text-xl font-semibold text-textPrimary">Modal genérico</Text>
      <Text className="text-center text-textMuted">Este espacio sirve como modal reutilizable para confirmaciones o detalles rápidos.</Text>
      <Button title="Volver" onPress={() => router.back()} />
    </View>
  );
}
