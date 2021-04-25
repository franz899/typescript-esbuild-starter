import esbuild from "esbuild";
import { baseConfig, platform } from "./config.mjs";

let config = {
  ...baseConfig,
  platform: platform.node,
  watch: true,
};

esbuild.build(config).catch(() => process.exit(1));