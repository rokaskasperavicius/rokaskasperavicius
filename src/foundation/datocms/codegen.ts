import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    'https://graphql.datocms.com': {
      headers: {
        Authorization: process.env.NEXT_DATOCMS_API_TOKEN!,
        'X-Exclude-Invalid': 'true',
      },
    },
  },
  documents: './**/*.graphql',
  config: {
    namingConvention: 'keep',
    defaultScalarType: 'any',
  },
  generates: {
    'src/foundation/datocms/types/generated.ts': {
      plugins: ['typescript-operations', 'typed-document-node'],
    },
  },
}

export default config
