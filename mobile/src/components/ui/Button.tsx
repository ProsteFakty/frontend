import { colors } from "@/theme";
import { Pressable, Text, StyleSheet } from "react-native";

type Variant = "primary" | "secondary" | "tertiary";

interface Props {
  text: string;
  variant: Variant;
  onPress: () => void;
};

const variantStyle = (variant: Variant) => {
  switch (variant) {
    case "primary":
      return {button: styles.buttonPrimary, label: styles.buttonPrimaryLabel};
    case "secondary":
      return {button: styles.buttonSecondary, label: styles.buttonSecondaryLabel};
    case "tertiary":
      return {button: undefined, label: styles.buttonTertiaryLabel};
  }
};

const Button = ({ text, variant, onPress }: Props) => {
  const {button, label} = variantStyle(variant);

  return (
    <Pressable onPress={onPress} style={[styles.button, button]}>
      <Text style={[styles.buttonLabel, label]}>{text}</Text>  
    </ Pressable>
    
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
  },
  buttonLabel: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
  },
  buttonPrimary: {
    backgroundColor: colors.brandPrimary,
  },
  buttonSecondary: {
    backgroundColor: colors.bgSurface,
    borderWidth: 1,
    borderColor: colors.borderDefault,
  },
  buttonPrimaryLabel: {
    color: colors.textOnBrand,
  },
  buttonSecondaryLabel: {
    color: colors.textPrimary,
  },
  buttonTertiaryLabel: {
    color: colors.brandPrimary,
  },
});