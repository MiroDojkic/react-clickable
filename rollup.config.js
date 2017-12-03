import flow from 'rollup-plugin-flow';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import css from 'modular-css-rollup';

export default {
  input: 'src/index.js',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs'
    },
    {
      file: './dist/umd/index.js',
      format: 'umd',
      name: 'Clickable'
    }
  ],
  plugins: [
    css({
      css: 'dist/style.css'
    }),
    flow(),
    commonjs({
      include: ['node_modules/**'],
      exclude: ['node_modules/process-es6/**'],
      namedExports: {
        'node_modules/react/index.js': ['Component', 'createElement'],
        'node_modules/react-dom/index.js': ['render']
      }
    }),
    resolve({
      module: true,
      main: true
    }),
    babel({ exclude: 'node_modules/**' })
  ]
};
