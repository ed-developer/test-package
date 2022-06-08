import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";

import pkg from "./package.json";

export default {
  input: "src/lib/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true,
    }),
    // commonjs({
    //   include: ["node_modules/**"],
    //   namedExports: {
    //     "node_modules/react/react.js": [
    //       "Children",
    //       "Component",
    //       "PropTypes",
    //       "createElement",
    //     ],
    //     "node_modules/react-dom/index.js": ["render"],
    //   },
    // }),
    commonjs({
      include: "node_modules/**",
      // left-hand side can be an absolute path, a path
      // relative to the current directory, or the name
      // of a module in node_modules
      namedExports: {
        "node_modules/react/index.js": [
          "cloneElement",
          "createContext",
          "Component",
          "createElement",
          "useContext",
          "useMemo",
          "useRef",
          "useEffect",
          "useCallback",
          "useState",
          "useLayoutEffect",
          "Children",
          "isValidElement",
          "Fragment",
          "forwardRef",
        ],
        "node_modules/react-dom/index.js": ["render", "hydrate"],
        "node_modules/react-is/index.js": [
          "isElement",
          "isValidElementType",
          "ForwardRef",
        ],
      },
    }),
  ],
};
