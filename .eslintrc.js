module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 0,
    'no-console': 'off',
    'simple-import-sort/imports': 0,
    "comma-dangle": 0,
  },
}