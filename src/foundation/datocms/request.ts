import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import {
  RequestDocument,
  Variables,
  request as graphqlRequest,
} from 'graphql-request'

export function request<TDocument = any>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables,
) {
  return graphqlRequest<TDocument, Variables>(
    'https://graphql.datocms.com/',
    document,
    variables,
    {
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      'X-Exclude-Invalid': 'true',
    },
  )
}
