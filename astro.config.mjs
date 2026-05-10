// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://antoniomrtz.github.io",
  base: "/adventjs-cli-web",
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "JetBrainsMono-Regular",
      cssVariable: "--font-jetbrainsmono-regular",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/JetBrainsMono-Regular.ttf"],
            weight: 400,
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "JetBrainsMono-Medium",
      cssVariable: "--font-jetbrainsmono-medium",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/JetBrainsMono-Medium.ttf"],
            weight: 500,
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "JetBrainsMono-Bold",
      cssVariable: "--font-jetbrainsmono-bold",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/JetBrainsMono-Bold.ttf"],
            weight: 700,
            style: "normal",
          },
        ],
      },
    },
  ],
});
