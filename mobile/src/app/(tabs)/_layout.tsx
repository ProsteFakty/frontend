import Feather from '@expo/vector-icons/Feather';
import { Tabs } from 'expo-router';
import { ComponentProps } from 'react';

type IconName = ComponentProps<typeof Feather>['name'];

// Order matches the Figma TabBar: Aktualności (home) first, Skanuj last.
const TABS: { name: string; title: string; icon: IconName }[] = [
  { name: '(news)', title: 'Aktualności', icon: 'file-text' },
  { name: '(sittings)', title: 'Posiedzenia', icon: 'columns' },
  { name: '(search)', title: 'Wyszukiwarka', icon: 'search' },
  { name: '(scan)', title: 'Skanuj', icon: 'maximize' },
];

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {TABS.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ color, size }) => <Feather name={icon} color={color as string} size={size} />,
          }}
        />
      ))}
    </Tabs>
  );
}
