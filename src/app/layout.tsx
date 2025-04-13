import { AppLayout } from '@/components/layout/app-layout'
import { SpeedInsights } from '@vercel/speed-insights/next'
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
      <SpeedInsights />

      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  )
}
