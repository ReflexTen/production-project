import webpack from 'webpack';
import { IBuildOptons } from './types/config';

export function buildResolvers(options: IBuildOptons): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}
