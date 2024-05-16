import { defineConfig } from "tsup"

export default defineConfig({
    entry: ["src/index.tsx"],
    format: ["cjs", "esm"],
    injectStyle: true,
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
})