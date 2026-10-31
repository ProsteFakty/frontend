# ProsteFakty Skaner (Expo)

Minimal app: take a photo → `POST /api/politicians/recognize` → show the MP's info.

## Run

1. Backend (repo `ProsteFakty/backend`, branch `feat/politician-recognition`):
   ```
   docker compose up -d --build
   docker compose exec backend python -m scripts.index_politicians
   ```
2. App:
   ```
   npm install
   npx expo start
   ```
   Scan the QR code with Expo Go. Phone and PC must be on the same Wi-Fi.

The app calls `http://<PC IP from Expo>:8000` by default. Override with
`EXPO_PUBLIC_API_URL=http://192.168.x.x:8000 npx expo start`. The URL in use is shown under the "Skanuj" button.
