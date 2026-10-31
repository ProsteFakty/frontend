import { Stack, usePathname } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function SittingsPage() {
  const pathname = usePathname();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Posiedzenia' }} />
      <Text style={styles.title}>Posiedzenia</Text>
      <Text>Route: (sittings) {pathname}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
  title: { fontSize: 22, fontWeight: 'bold' },
});
