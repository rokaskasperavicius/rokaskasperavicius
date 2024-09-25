import { Header } from './header'

type AppLayoutProps = {
  children: React.ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className='m-auto mb-20 mt-10 max-w-screen-2xl 2xl:mt-40'>
      <div className='md:ml-16'>
        <Header />

        <main>{children}</main>
      </div>
    </div>
  )
}
