import { defineConfig, presetIcons, presetWind4 } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      background: 'var(--color-background)',
      foreground: 'var(--color-foreground)',
    },
    property: {
      composite: 'var(--property-composite)',
    },
    ease: {
      'in-out-quint': 'var(--ease-io-quint)',
      'in-out-circ': 'var(--ease-io-circ)',
      'out-expo': 'var(--ease-o-expo)',
      'out-back': 'var(--ease-o-back)',
    },
  },
  presets: [
    presetWind4(),
    presetIcons({
      scale: 1.2,
    }),
  ],
})
