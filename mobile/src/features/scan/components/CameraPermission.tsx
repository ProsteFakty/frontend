import { Image, ImageSource } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/theme';
import Button from '@/components/ui/Button';

interface Props {
  onAllow: () => void;
};

interface InfoItem {
  icon: ImageSource;
  text: string;
}

const INFO_ITEMS: InfoItem[] = [
  {
    icon: require('@assets/icons/scan/shield.svg'),
    text: 'Porównujemy twarz tylko z posłami obecnej kadencji.',
  },
  {
    icon: require('@assets/icons/scan/eye-off.svg'),
    text: 'Nie zapisujemy ani nie udostępniamy Twojego zdjęcia.',
  },
];

export function CameraPermission({ onAllow }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.illustration}>
        <View style={styles.illustrationInner}>
          <Image source={require('@assets/icons/scan/face.svg')} style={styles.faceIcon} />
        </View>
      </View>

      <Text style={styles.title}>Kim jest ten poseł?</Text>
      <Text style={styles.description}>
       Skieruj aparat na twarz posła na ekranie telewizora, na żywo lub na plakacie. Poznaj jego profil i sprawdź, jak głosuje.
      </Text>

      <View style={styles.privacy}>
        {INFO_ITEMS.map(({ icon, text }) => (
          <View key={text} style={styles.point}>
            <Image source={icon} style={styles.pointIcon} />
            <Text style={styles.pointText}>{text}</Text>
          </View>
        ))}
      </View>

      <View style={styles.actionButtons}>
        <Button variant="primary" onPress={onAllow} text="Zezwól na dostęp do aparatu" />
        <Button variant="tertiary" onPress={() => {}} text="Szukaj posła po nazwisku" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    gap: 24,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  illustration: {
    width: 140,
    height: 140,
    borderRadius: 999,
    backgroundColor: colors.brandSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationInner: {
    width: 88,
    height: 88,
    borderRadius: 999,
    backgroundColor: colors.bgSurface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  faceIcon: { width: 40, height: 40 },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  privacy: {
    alignSelf: 'stretch',
    gap: 12,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.borderDefault,
    backgroundColor: colors.bgSurface,
  },
  point: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  pointIcon: { width: 20, height: 20 },
  pointText: { flex: 1, fontSize: 13, lineHeight: 18, color: colors.textPrimary },
  actionButtons: {
    alignSelf: 'stretch',
    gap: 16,
  }
});
