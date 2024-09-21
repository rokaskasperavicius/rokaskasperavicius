import { AppLayout } from '@/components/layout/app-layout'
import type { Metadata } from 'next'

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
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  )
}
