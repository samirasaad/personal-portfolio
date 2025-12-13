import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
    {
        ignores: ['lib/pdfParser/pdf.js', '.next/**', 'node_modules/**'],
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            '@next/next': nextPlugin,
            react: reactPlugin,
            'react-hooks': hooksPlugin,
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'react-hooks/exhaustive-deps': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
