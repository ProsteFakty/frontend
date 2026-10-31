import { Stack, usePathname } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NewsPage() {
  const pathname = usePathname();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Aktualności' }} />
      <Text style={styles.title}>Aktualności</Text>
      <Text>Route: (news) {pathname}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
  title: { fontSize: 22, fontWeight: 'bold' },
});
