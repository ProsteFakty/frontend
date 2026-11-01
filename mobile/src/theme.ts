export const colors = {
  bgApp: '#fbf6ee',
  bgSurface: '#ffffff',
  bgDark: '#2b2118',
  overlayLight: 'rgba(255,255,255,0.16)',
  borderDefault: '#e8dcc8',
  brandPrimary: '#8a5a1f', 
  brandSoft: '#f6e7c8',
  textPrimary: '#2b2118',
  textSecondary: '#5c4a3a',
  textMuted: '#9c8873',
  textOnBrand: '#ffffff',
};

export const stackScreenOptions = {
  headerTitleAlign: 'center',
  headerStyle: { backgroundColor: colors.bgApp },
  headerShadowVisible: false,
  headerTintColor: colors.textPrimary,
  contentStyle: { backgroundColor: colors.bgApp },
} as const;
