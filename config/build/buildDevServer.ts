import { Configuration as DevConfiguration } from 'webpack-dev-server';
import { IBuildOptons } from './types/config';

export function buildDevServer(options: IBuildOptons): DevConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
