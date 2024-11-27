import { request } from '@/foundation/datocms'
import { ResumeDocument } from '@/foundation/datocms/types'

import { Footer } from './footer'
import { Header } from './header'

type AppLayoutProps = {
  children: React.ReactNode
}

export const AppLayout = async ({ children }: AppLayoutProps) => {
  const data = await request(ResumeDocument)

  return (
    <div className='m-auto mt-1 max-w-screen-2xl md:mt-10 2xl:mt-40'>
      <div className='md:ml-16'>
        <Header resumeUrl={data.resume?.pdf.url} />

        <main>{children}</main>

        <Footer />
      </div>
    </div>
  )
}
