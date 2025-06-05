'use client'

import { useEffect, useState } from 'react'

export const Footer = () => {
  const [date, setDate] = useState<string | null>(null)

  useEffect(() => {
    const handle = async () => {
      try {
        const data = await fetch('https://webhooks.cloudpeak.dev/api/meta', {
          cache: 'no-store',
        })
        const result = await data.json()

        setDate(
          new Date(result.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
        )
      } catch {}
    }

    handle()
  }, [])

  return (
    <footer className='mt-10 flex flex-row justify-between border-t-2 border-solid border-primary-600 p-4 md:p-6 md:text-xl'>
      <div>Rokas Kasperavicius :)</div>

      {date && <div>Last updated: {date}</div>}
    </footer>
  )
}
