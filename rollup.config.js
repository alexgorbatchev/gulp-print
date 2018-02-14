import pkg from './package.json';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'dist/gulp-print.js',
  output: [
    {
      file: pkg.main,
	  sourcemap: true,
      format: 'cjs',
    },
    {
      file: pkg.module,
	  sourcemap: true,
      format: 'es',
    },
  ],
  plugins: [sourcemaps()],
  external: ['map-stream', 'path', 'fancy-log', 'ansi-colors'],
};
