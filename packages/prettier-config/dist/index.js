// src/index.ts
var src_default = {
  semi: false,
  singleQuote: true,
  arrowParens: "avoid",
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: "preserve",
  requirePragma: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  rangeStart: 0,
  bracketSameLine: false,
  endOfLine: "auto",
  importOrder: [
    "^@core/(.*)$",
    "^@server/(.*)$",
    "^@ui/(.*)$",
    "^[./]"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
export {
  src_default as default
};
