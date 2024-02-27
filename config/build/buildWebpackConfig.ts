import webpack from "webpack";

import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoders } from "./buildLoders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buldDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    devtool: isDev ? "inline-source-map" : undefined,

    plugins: buildPlugins(options),
    module: {
      rules: buildLoders(),
    },
    resolve: buildResolvers(),
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
