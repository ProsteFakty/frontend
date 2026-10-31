import { Image, ImageSource } from 'expo-image';
import { Tabs } from 'expo-router';
import { PlatformPressable } from 'expo-router/react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@/theme';

const TABS: { name: string; title: string; icon: ImageSource }[] = [
  { name: '(news)', title: 'Aktualności', icon: require('../../../assets/icons/tabs/news.svg') },
  { name: '(sittings)', title: 'Posiedzenia', icon: require('../../../assets/icons/tabs/sittings.svg') },
  { name: '(search)', title: 'Wyszukiwarka', icon: require('../../../assets/icons/tabs/search.svg') },
  { name: '(scan)', title: 'Skanuj', icon: require('../../../assets/icons/tabs/scan.svg') },
];

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: colors.bgApp },
        tabBarStyle: [styles.tabBar, { height: 60 + insets.bottom, paddingBottom: insets.bottom }],
        tabBarItemStyle: styles.item,
        tabBarActiveTintColor: colors.brandPrimary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarIconStyle: styles.iconSlot,
        tabBarButton: (props) => <PlatformPressable {...props} android_ripple={{ color: 'transparent' }} />,
      }}>
      {TABS.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ focused, color }) => (
              <View style={[styles.indicator, focused && styles.indicatorActive]}>
                <Image source={icon} tintColor={color as string} style={styles.icon} />
              </View>
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text style={[styles.label, { color }, focused && styles.labelActive]}>{title}</Text>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.bgSurface,
    borderColor: colors.borderDefault,
    borderTopWidth: 1,
    paddingTop: 4,
  },
  item: { paddingVertical: 4, gap: 4 },
  iconSlot: { width: 56, height: 30 },
  indicator: { paddingHorizontal: 16, paddingVertical: 3, borderRadius: 999 },
  indicatorActive: { backgroundColor: colors.brandSoft },
  icon: { width: 24, height: 24 },
  label: { fontSize: 11, lineHeight: 14, fontWeight: '500' },
  labelActive: { fontWeight: '600' },
});
