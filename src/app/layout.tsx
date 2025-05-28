import { AppLayout } from '@/components/layout/app-layout'
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
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font, @next/next/google-font-display */}
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=open_in_new,work&display=block'
        />

        <link rel='preconnect' href='https://webhooks.cloudpeak.dev' />
        <link rel='preconnect' href='https://www.datocms-assets.com' />
      </head>

      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  )
}
