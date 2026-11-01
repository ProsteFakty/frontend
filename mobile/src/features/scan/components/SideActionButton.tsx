import { Image, ImageSource } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/theme';

interface Props {
  icon: ImageSource;
  label: string;
  onPress: () => void 
};

const SideActionButton = ({ icon, label, onPress }: Props) => {
  return (
    <Pressable style={styles.sideAction} onPress={onPress}>
      <View style={[styles.roundButton, styles.filled, styles.sideButton]}>
        <Image source={icon} style={styles.sideIcon} />
      </View>
      <Text style={styles.sideLabel}>{label}</Text>
    </Pressable>
  );
}

export default SideActionButton;

const styles = StyleSheet.create({
  sideAction: { alignItems: 'center', gap: 6 },
  sideButton: { width: 52, height: 52 },
  sideIcon: { width: 22, height: 22 },
  sideLabel: { fontSize: 11, lineHeight: 14, fontWeight: '500', color: colors.textOnBrand },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filled: { backgroundColor: colors.overlayLight },
})