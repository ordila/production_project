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
  port: number;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
