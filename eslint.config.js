import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importX from 'eslint-plugin-import-x'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import boundaries from 'eslint-plugin-boundaries'
import tseslint from 'typescript-eslint'

import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // ============================================================
  // GLOBAL IGNORES
  // ============================================================

  globalIgnores([
    'dist/**',
    'node_modules/**',
    'coverage/**',
    '.vite/**',
    'public/**',
  ]),

  // ============================================================
  // TYPESCRIPT + REACT
  // ============================================================

  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      js.configs.recommended,

      // Type-aware TypeScript linting
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,

      // React
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],

      // React Hooks
      reactHooks.configs.flat.recommended,

      // Vite / React Refresh
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,

        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    plugins: {
      'import-x': importX,
      'simple-import-sort': simpleImportSort,
      boundaries,
    },

    // ==========================================================
    // ARCHITECTURE
    // ==========================================================

    settings: {
      react: {
        version: 'detect',
      },

      /*
       * Feature-Sliced Design
       *
       * app
       *  ↓
       * pages
       *  ↓
       * widgets
       *  ↓
       * features
       *  ↓
       * entities
       *  ↓
       * shared
       *
       * Higher layers may depend on lower layers.
       * Lower layers MUST NOT depend on higher layers.
       */

      'boundaries/elements': [
        {
          type: 'app',
          pattern: 'src/app/**',
        },

        {
          type: 'pages',
          pattern: 'src/pages/**',
        },

        {
          type: 'widgets',
          pattern: 'src/widgets/**',
        },

        {
          type: 'features',
          pattern: 'src/features/**',
        },

        {
          type: 'entities',
          pattern: 'src/entities/**',
        },

        {
          type: 'shared',
          pattern: 'src/shared/**',
        },

        {
          type: 'stories',
          pattern: 'src/stories/**',
        },
      ],

      'boundaries/include': ['src/**/*.{ts,tsx}'],

      /*
       * Check:
       * - imports
       * - exports
       * - require
       * - dynamic imports
       */

      'boundaries/dependency-nodes': [
        'import',
        'export',
        'require',
        'dynamic-import',
      ],
    },

    rules: {
      // ========================================================
      // TYPESCRIPT
      // ========================================================

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'none',
          destructuredArrayIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-explicit-any': 'warn',

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],

      '@typescript-eslint/consistent-type-exports': [
        'error',
        {
          fixMixedExportsWithInlineTypeSpecifier: true,
        },
      ],

      '@typescript-eslint/consistent-type-definitions': [
        'error',
        'type',
      ],

      '@typescript-eslint/no-floating-promises': 'error',

      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            arguments: false,
            attributes: false,
          },
        },
      ],

      '@typescript-eslint/no-unnecessary-condition': 'warn',

      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',

      '@typescript-eslint/prefer-nullish-coalescing': 'warn',

      '@typescript-eslint/prefer-optional-chain': 'error',

      // ========================================================
      // JAVASCRIPT
      // ========================================================

      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],

      'no-debugger': 'error',

      'no-duplicate-imports': 'error',

      'no-unreachable': 'error',

      'no-unreachable-loop': 'error',

      // ========================================================
      // IMPORTS
      // ========================================================

      'import-x/first': 'error',

      'import-x/no-duplicates': 'error',

      'import-x/no-unresolved': 'error',

      'import-x/newline-after-import': [
        'error',
        {
          count: 1,
        },
      ],

      // ========================================================
      // IMPORT SORTING
      // ========================================================

      'simple-import-sort/imports': 'error',

      'simple-import-sort/exports': 'error',

      // ========================================================
      // REACT
      // ========================================================

      'react/jsx-no-useless-fragment': 'warn',

      'react/no-array-index-key': 'warn',

      'react/self-closing-comp': 'error',

      'react/jsx-boolean-value': [
        'error',
        'never',
      ],

      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never',
        },
      ],

      'react/no-unstable-nested-components': [
        'warn',
        {
          allowAsProps: true,
        },
      ],

      // ========================================================
      // REACT REFRESH
      // ========================================================

      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],

      // ========================================================
      // ARCHITECTURE
      // ========================================================

      /*
       * By default everything is forbidden.
       *
       * Then we explicitly describe allowed dependencies.
       */

      'boundaries/element-types': [
  'error',
  {
    default: 'disallow',

    rules: [
      // shared
      {
        from: 'shared',
        allow: ['shared'],
      },

      // entities → entities, shared
      {
        from: 'entities',
        allow: ['entities', 'shared'],
      },

      // features → features, entities, shared
      {
        from: 'features',
        allow: ['features', 'entities', 'shared'],
      },

      // widgets → widgets, features, entities, shared
      {
        from: 'widgets',
        allow: [
          'widgets',
          'features',
          'entities',
          'shared',
        ],
      },

      // pages → pages, widgets, features, entities, shared
      {
        from: 'pages',
        allow: [
          'pages',
          'widgets',
          'features',
          'entities',
          'shared',
        ],
      },

      // app → everything
      {
        from: 'app',
        allow: [
          'app',
          'pages',
          'widgets',
          'features',
          'entities',
          'shared',
        ],
      },

      // stories → everything
      {
        from: 'stories',
        allow: [
          'stories',
          'app',
          'pages',
          'widgets',
          'features',
          'entities',
          'shared',
        ],
      },
    ],
  },
],
    },
  },

  // ============================================================
  // JAVASCRIPT CONFIG FILES
  // ============================================================

  {
    files: [
      '**/*.config.js',
      '**/*.config.mjs',
      '**/*.config.cjs',
    ],

    extends: [
      tseslint.configs.disableTypeChecked,
    ],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // ============================================================
  // TESTS
  // ============================================================

  {
    files: [
      '**/*.test.{ts,tsx}',
      '**/*.spec.{ts,tsx}',
    ],

    rules: {
      '@typescript-eslint/no-explicit-any': 'off',

      'react-refresh/only-export-components': 'off',
    },
  },
])
