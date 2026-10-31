import { Stack, usePathname } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function SearchPage() {
  const pathname = usePathname();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Wyszukiwarka' }} />
      <Text style={styles.title}>Wyszukiwarka</Text>
      <Text>Route: (search) {pathname}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
  title: { fontSize: 22, fontWeight: 'bold' },
});
