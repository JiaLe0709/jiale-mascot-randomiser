import babel from "@rollup/plugin-babel";

export default {
  input: './src/index.js',
  output: {
    file: './lib/bundle.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env', '@babel/preset-react'] })
  ],
  external: ['react'],
};