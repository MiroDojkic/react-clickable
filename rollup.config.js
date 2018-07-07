import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

let pkg = require('./package.json');
let external = []
  // Mark dependencies and peerDependencies as external
  .concat(Object.keys(pkg.dependencies), Object.keys(pkg.peerDependencies));

export default {
  input: 'src/index.js',
  external: external,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
      exports: 'named',
      name: 'ReactClickable',
      globals: {
        react: 'React',
      },
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    commonjs({
      namedExports: {
        'node_modules/react/index.js': ['Component'],
      },
    }),
  ],
};
