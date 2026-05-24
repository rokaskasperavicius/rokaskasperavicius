import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-plugin-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig([
  globalIgnores(['**/generated.ts']),
  {
    extends: [...nextCoreWebVitals],

    plugins: {
      prettier,
    },

    rules: {
      'prettier/prettier': 'error',
    },
  },
])
