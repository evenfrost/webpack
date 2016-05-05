import { resolve } from 'path';

export default {
  entry: './index',
  output: {
    path: resolve(__dirname),
    filename: 'bundle.js',
  },
};
