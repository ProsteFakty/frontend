import Constants from 'expo-constants';
import { File } from 'expo-file-system';

// Response shape of POST /api/politicians/recognize (backend: feat/politician-recognition).
export type Politician = {
  full_name: string;
  first_name: string;
  last_name: string;
  club: string | null;
  district: string | null;
  voivodeship: string | null;
  birth_date: string | null;
  birth_location: string | null;
  profession: string | null;
  education: string | null;
  email: string | null;
  number_of_votes: number | null;
  active: boolean;
  photo_url: string;
  profile_url: string;
  mp_id: number;
  term: number;
};

export type Face = {
  box: [number, number, number, number];
  similarity: number | null;
  politician: Politician | null;
};

export type RecognizeResponse = { faces: Face[] };

// EXPO_PUBLIC_API_URL wins. Otherwise assume the backend runs on the same PC as the
// Expo dev server (port 8000), so a phone on the same Wi-Fi reaches it without config.
function resolveApiUrl(): string {
  const fromEnv = process.env.EXPO_PUBLIC_API_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, '');
  const host = Constants.expoConfig?.hostUri?.split(':')[0];
  return `http://${host ?? 'localhost'}:8000`;
}

export const API_URL = resolveApiUrl();

const ERRORS: Record<number, string> = {
  400: 'Plik nie jest obrazem',
  413: 'Zdjęcie jest większe niż 10 MB',
  422: 'Brak zdjęcia w żądaniu',
  500: 'Błąd serwera',
};

export async function recognize(photoUri: string): Promise<RecognizeResponse> {
  const body = new FormData();
  // Expo's fetch (SDK 58) rejects RN-style { uri, name, type } parts; it needs a Blob-like with bytes().
  body.append('photo', new File(photoUri));

  const res = await fetch(`${API_URL}/api/politicians/recognize`, { method: 'POST', body });
  if (!res.ok) throw new Error(ERRORS[res.status] ?? `Błąd HTTP ${res.status}`);
  return res.json();
}
