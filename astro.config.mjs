// @ts-check
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  site: "https://gsonghj.github.io",
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      weights: [400],
      styles: ["normal"],
    },
  ],
  integrations: [icon()],
  devToolbar: { enabled: false },
})
