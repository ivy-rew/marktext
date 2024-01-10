import vue from '@vitejs/plugin-vue2'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
//import renderer from 'vite-plugin-electron-renderer'
//import { nodePolyfills } from 'vite-plugin-node-polyfills'
import nodePolyfills from 'rollup-plugin-node-polyfills';
import dynamicImport from 'vite-plugin-dynamic-import'

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
    renderer(),
    nodePolyfills({
      overrides: {
        "fs" : "memfs"
      },
    }),
    dynamicImport(/* options */),
    // nodePolyfills({
    //   // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
    //   include: ['path', 'fs'],
    //   // To exclude specific polyfills, add them to this list. Note: if include is provided, this has no effect
    //   exclude: [
    //     'http', // Excludes the polyfill for `http` and `node:http`.
    //   ],
    //   // Whether to polyfill specific globals.
    //   globals: {
    //     Buffer: true, // can also be 'build', 'dev', or false
    //     global: true,
    //     process: true,
    //   },
    //   // Override the default polyfills for specific modules.
    //   overrides: {
    //     // Since `fs` is not supported in browsers, we can use the `memfs` package to polyfill it.
    //     fs: 'memfs',
    //   },
    //   // Whether to polyfill `node:` protocol imports.
    //   protocolImports: true,
    // }),
  ],
  resolve: {
    alias: {
      //pollyfills:

    }
  }
})
