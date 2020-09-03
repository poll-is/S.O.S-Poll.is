import { Config } from "@stencil/core";
import nodePolyfills from "rollup-plugin-node-polyfills";

// https://stenciljs.com/docs/config

export const config: Config = {
  globalScript: "src/global/app.ts",
  globalStyle: "src/global/app.css",
  taskQueue: "async",
  rollupPlugins: {
    after: [nodePolyfills()],
  },
  outputTargets: [
    {
      type: "www",
      serviceWorker: null,
    },
  ],
};
