export const colors = {
  bgApp: '#fbf6ee',
  bgSurface: '#ffffff',
  borderDefault: '#e8dcc8',
  brandPrimary: '#8a5a1f', 
  brandSoft: '#f6e7c8',
  textPrimary: '#2b2118', 
  textMuted: '#9c8873',
};

export const stackScreenOptions = {
  headerTitleAlign: 'center',
  headerStyle: { backgroundColor: colors.bgApp },
  headerShadowVisible: false,
  headerTintColor: colors.textPrimary,
  contentStyle: { backgroundColor: colors.bgApp },
} as const;
