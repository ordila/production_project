export type BuildMode = "production" | "development";

export interface BuidPath {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuidPath;
  isDev: boolean;
}
