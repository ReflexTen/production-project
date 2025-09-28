export type BuildMode = 'production' | 'development';

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface IBuildEnv {
  mode: BuildMode;
  port: number;
}

export interface IBuildOptons {
  mode: BuildMode;
  paths: IBuildPaths;
  port: number;
  isDev: boolean;
}
