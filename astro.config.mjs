import { defineConfig } from 'astro/config';
import deno from "@astrojs/deno";
import UnoCSS from 'unocss/astro';

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: deno(),
    integrations: [
        UnoCSS(), 
        preact({ compat: true })
    ]
});