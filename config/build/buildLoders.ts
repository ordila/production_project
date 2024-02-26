import webpack from "webpack";

export const buildLoders = (): webpack.RuleSetRule[] => {
  return [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
  ];
};
