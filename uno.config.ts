import { defineConfig, presetUno, presetIcons, presetWebFonts } from 'unocss';

export default defineConfig({
  darkMode: 'class',
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Inter',
          weights: ['400', '500', '600', '700', '800'],
        },
        mono: 'JetBrains Mono',
      },
    }),
  ],
  theme: {
    colors: {
      primary: '#2563eb',
      accent:  '#1d4ed8',
    },
  },
});
