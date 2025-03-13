import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'
  
export default defineConfig({
    shortcuts: [
      // ...
    ],
    theme: {
      colors: {
        // ...
      }
    },
    presets: [
      presetAttributify(),
      presetIcons(),
      presetTypography(),
      presetWebFonts({
        fonts: {
          // Font Here
          sans: {
            name: 'Roboto Condensed',
            weights: [ '300', '400', '500', '600', '700' ]
        }
        },
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
})