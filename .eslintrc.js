module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint-config-standard'
  ],
  plugins: [
    'eslint-plugin-node'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
}
