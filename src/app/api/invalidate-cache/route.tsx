import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

import { cacheTag } from '@/foundation/datocms/request'

/*
 * This route handler receives "Cache Tag Invalidation" events from a DatoCMS
 * webhook, and is responsible for invalidating the Next.js cache.
 *
 * Please note, this project uses a very basic cache invalidation method: all
 * requests to DatoCMS are tagged with "datocms" in the Next.js Data Cache.
 * Whenever DatoCMS notifies us of any updates, we invalidate all requests with
 * the same tag.
 *
 * For more information: https://www.datocms.com/docs/next-js/using-cache-tags
 */
export async function POST(req: NextRequest) {
  try {
    // Parse query string parameters
    const token = req.nextUrl.searchParams.get('token')

    // Ensure that the request is coming from a trusted source
    if (token !== process.env.REVALIDATE_CACHE_TOKEN) {
      return NextResponse.json(
        { message: 'Invalid token' },
        {
          status: 401,
        },
      )
    }

    revalidateTag(cacheTag)

    return NextResponse.json(
      { message: 'Cache revalidated' },
      {
        status: 200,
      },
    )
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { message: 'Something went wrong' },
      {
        status: 500,
      },
    )
  }
}
