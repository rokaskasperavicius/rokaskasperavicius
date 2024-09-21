import { Header } from './header'
import { Navigation } from './navigation'

type AppLayoutProps = {
  children: React.ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className='m-auto mb-20 mt-10 max-w-screen-2xl lg:mt-40'>
      <Navigation />

      <div className='md:ml-14 lg:ml-[60px]'>
        <Header />

        <main>{children}</main>
      </div>
    </div>
  )
}
