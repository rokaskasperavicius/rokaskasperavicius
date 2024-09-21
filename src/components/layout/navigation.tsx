'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav className='nav-border fixed top-0 hidden h-full justify-end px-3.5 py-12 md:flex'>
      <div className='flex max-w-fit flex-col justify-end gap-4'>
        <Item href='/' isActive={pathname === '/'} title='Home' />

        <Item
          href='/projects'
          isActive={pathname === '/projects'}
          title='Projects'
        />
      </div>
    </nav>
  )
}

type Props = {
  href: string
  title: string
  isActive: boolean
}

const Item = ({ href, title, isActive }: Props) => (
  <Link
    href={href}
    className={clsx(
      'hover:bg-accent cursor-pointer rounded-sm py-2 text-xl transition-colors [text-orientation:upright] [writing-mode:vertical-lr] hover:text-black lg:text-2xl',
      {
        'bg-accent text-black': isActive,
      },
    )}
  >
    {title}
  </Link>
)
