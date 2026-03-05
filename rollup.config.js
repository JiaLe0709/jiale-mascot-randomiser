import babel from "@rollup/plugin-babel";

export default {
  input: "./src/index.js",
  output: {
    file: "./lib/bundle.cjs",
    format: "cjs",   
    sourcemap: true,
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      presets: [
        ["@babel/preset-env", { modules: false }], 
        "@babel/preset-react"
      ]
    })
  ],
  external: ["react"],
};