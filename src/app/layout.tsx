import { AppLayout } from '@/components/layout/app-layout'
import { LoadSymbolsFont } from '@/components/shared/load-symbols-font'
import type { Metadata } from 'next'
import 'react-photo-view/dist/react-photo-view.css'

import '../foundation/styles/globals.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rokas Kasperavicius',
  description: 'Rokas Kasperavicius personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <LoadSymbolsFont />

      <head>
        <link
          rel='preload'
          href='/MaterialSymbolsOutlined.ttf'
          as='font'
          type='font/ttf'
          crossOrigin='anonymous'
        />
      </head>

      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  )
}
