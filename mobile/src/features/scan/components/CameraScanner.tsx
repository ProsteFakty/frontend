import { CameraView } from 'expo-camera';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@/theme';
import SideActionButton from './SideActionButton';

interface Props {
  active: boolean;
  onCapture: (photoUri: string) => void;
}

const CameraScanner = ({ active, onCapture }: Props) => {
  const insets = useSafeAreaInsets();
  const camera = useRef<CameraView>(null);
  const [torch, setTorch] = useState(false);

  async function capture() {
    const photo = await camera.current?.takePictureAsync({ quality: 0.7 });
    if (photo) onCapture(photo.uri);
  }

  return (
    <View style={styles.screen}>
      {active && (
        <>
          <StatusBar style="light" />
          <CameraView ref={camera} style={StyleSheet.absoluteFill} facing="back" enableTorch={torch} />
        </>
      )}

      <View style={[styles.topControls, { paddingTop: insets.top + 8 }]}>
        <Pressable style={[styles.roundButton, styles.filled]} onPress={() => setTorch((prev) => !prev)}>
          <Image source={require('@assets/icons/scan/flash.svg')} style={styles.flashIcon} />
        </Pressable>
        <Text style={styles.title}>Skanuj</Text>
        <View style={styles.roundButton} />
      </View>

      <View style={styles.viewfinder}>
        <View style={styles.faceFrame}>
          <Image source={require('@assets/icons/scan/face-guide.svg')} style={styles.faceGuide} />
          <Image source={require('@assets/icons/scan/corners.svg')} style={StyleSheet.absoluteFill} />
        </View>
        <View style={styles.hint}>
          <Text style={styles.hintText}>Skieruj aparat na jedną twarz</Text>
        </View>
      </View>

      <View style={styles.bottomControls}>
        <SideActionButton icon={require('@assets/icons/scan/image.svg')} label="Galeria" onPress={() => {}} />
        <Pressable style={styles.shutter} onPress={capture}>
          <View style={styles.shutterInner} />
        </Pressable>
        <SideActionButton icon={require('@assets/icons/scan/user.svg')} label="Po nazwisku" onPress={() => {}} />
      </View>
    </View>
  );
}

export default CameraScanner;


const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bgDark },
  topControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filled: { backgroundColor: colors.overlayLight },
  flashIcon: { width: 20, height: 20 },
  title: { fontSize: 17, lineHeight: 22, fontWeight: '600', color: colors.textOnBrand },
  viewfinder: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 24 },
  faceFrame: { width: 260, height: 320, alignItems: 'center', justifyContent: 'center' },
  faceGuide: { width: 170, height: 220 },
  hint: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: colors.overlayLight,
  },
  hintText: { fontSize: 13, lineHeight: 18, color: colors.textOnBrand },
  bottomControls: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 8,
    paddingBottom: 24,
  },
  shutter: {
    width: 76,
    height: 76,
    borderRadius: 999,
    borderWidth: 4,
    borderColor: colors.textOnBrand,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shutterInner: { width: 60, height: 60, borderRadius: 999, backgroundColor: colors.textOnBrand },
});
