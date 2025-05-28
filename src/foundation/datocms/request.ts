import { NEXT_DATOCMS_API_TOKEN } from '@/config/constants'
import { TypedDocumentNode, executeQuery } from '@datocms/cda-client'

export const cacheTag = 'datocms'

export function request<TVariables, TResult>(
  query: TypedDocumentNode<TResult, TVariables>,
  options?: ExecuteQueryOptions<TVariables>,
) {
  return executeQuery<TResult, TVariables>(query, {
    token: NEXT_DATOCMS_API_TOKEN,
    variables: options?.variables,
    excludeInvalid: true,
    includeDrafts: false,

    requestInitOptions: {
      cache: 'force-cache',
      /*
       * This project utilizes an extremely basic cache invalidation
       * technique: by using the `next.tags` option, all requests to DatoCMS
       * are tagged with "datocms" in the Next.js Data Cache. Whenever DatoCMS
       * notifies us of any updates via webhook, we invalidate all requests
       * with the same tag.
       *
       * For more info: https://www.datocms.com/docs/next-js/using-cache-tags
       */
      next: {
        tags: [cacheTag],
      },
    },
  })
}

type ExecuteQueryOptions<TVariables> = {
  variables?: TVariables
}
