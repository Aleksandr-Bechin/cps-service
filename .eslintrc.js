module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:import/errors', 'plugin:import/warnings', 'prettier'],

    parserOptions: {
        files: ['.eslintrc.{js,cjs}'],
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['import', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'eqeqeq': ['warn', 'always'],
        'curly': 'warn',
        'semi': ['error', 'always']
    },

    setting: {
        'import/resolver': {
            node: {
                extensions: ['.js'],
                moduleDirectory: ['node_modules', 'src/']
            }
        }
    }
};
