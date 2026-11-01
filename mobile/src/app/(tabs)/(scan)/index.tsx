import { CameraView, useCameraPermissions } from 'expo-camera';
import { Stack, useIsFocused } from 'expo-router';
import { useRef, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { API_URL, Politician, recognize, RecognizeResponse } from '@/api';
import { CameraPermission } from '@/features/scan/components/CameraPermission';

type State =
  | { kind: 'camera' }
  | { kind: 'loading' }
  | { kind: 'result'; data: RecognizeResponse }
  | { kind: 'error'; message: string };

export default function Scanner() {
  const [permission, requestPermission] = useCameraPermissions();
  // Only one camera preview can be active, so unmount it when another tab is shown.
  const isFocused = useIsFocused();
  const [state, setState] = useState<State>({ kind: 'camera' });
  const camera = useRef<CameraView>(null);

  async function scan() {
    if (!camera.current) return;
    try {
      const photo = await camera.current.takePictureAsync({ quality: 0.7 });
      setState({ kind: 'loading' });
      setState({ kind: 'result', data: await recognize(photo.uri) });
    } catch (e) {
      setState({ kind: 'error', message: e instanceof Error ? e.message : String(e) });
    }
  }

  const reset = () => setState({ kind: 'camera' });

  let content: React.ReactNode;
  if (!permission) {
    content = <ActivityIndicator />;
  } else if (!permission.granted) {
    content = (
      // Request camera permission if possible, otherwise redirect to app settings.
      <CameraPermission
        onAllow={permission.canAskAgain ? requestPermission : Linking.openSettings}
      />
    );
  } else if (state.kind === 'camera') {
    content = (
      <View style={styles.fill}>
        {isFocused && <CameraView ref={camera} style={styles.fill} facing="back" />}
        <View style={styles.bottom}>
          <Button title="Skanuj" onPress={scan} />
          <Text style={styles.small}>API: {API_URL}</Text>
        </View>
      </View>
    );
  } else if (state.kind === 'loading') {
    content = (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Rozpoznawanie...</Text>
      </View>
    );
  } else if (state.kind === 'error') {
    content = (
      <View style={styles.center}>
        <Text>Błąd: {state.message}</Text>
        <Text style={styles.small}>API: {API_URL}</Text>
        <Button title="Spróbuj ponownie" onPress={reset} />
      </View>
    );
  } else {
    const face = state.data.faces[0];
    content = (
      <ScrollView contentContainerStyle={styles.result}>
        {!face && <Text>Nie znaleziono twarzy</Text>}
        {face && !face.politician && <Text>Nie rozpoznano posła</Text>}
        {face?.politician && <PoliticianInfo p={face.politician} similarity={face.similarity} />}
        <Button title="Skanuj ponownie" onPress={reset} />
      </ScrollView>
    );
  }

  return (
    <View style={styles.fill}>
      <Stack.Screen options={{ title: 'Skanuj' }} />
      {content}
    </View>
  );
}

function PoliticianInfo({ p, similarity }: { p: Politician; similarity: number | null }) {
  const rows: [string, string | number | null][] = [
    ['Klub', p.club],
    ['Okręg', p.district],
    ['Województwo', p.voivodeship],
    ['Data urodzenia', p.birth_date],
    ['Miejsce urodzenia', p.birth_location],
    ['Zawód', p.profession],
    ['Wykształcenie', p.education],
    ['Email', p.email],
    ['Liczba głosów', p.number_of_votes],
    ['Mandat', p.active ? 'aktywny' : 'wygasł'],
    ['Kadencja', p.term],
    ['Podobieństwo', similarity?.toFixed(3) ?? null],
  ];

  return (
    <View style={styles.card}>
      <Image source={{ uri: p.photo_url }} style={styles.photo} />
      <Text style={styles.name}>{p.full_name}</Text>
      {rows
        .filter(([, value]) => value !== null && value !== undefined)
        .map(([label, value]) => (
          <Text key={label}>
            {label}: {value}
          </Text>
        ))}
      <Button title="Profil na sejm.gov.pl" onPress={() => Linking.openURL(p.profile_url)} />
    </View>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12, padding: 16 },
  bottom: { padding: 16, gap: 8 },
  small: { fontSize: 11, color: '#666', textAlign: 'center' },
  result: { padding: 16, gap: 16 },
  card: { gap: 4 },
  photo: { width: 150, height: 190, alignSelf: 'center', marginBottom: 8 },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
});
