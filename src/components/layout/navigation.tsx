'use client'

import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useWindowSize } from 'react-use'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}

export const Navigation = ({ open, setOpen }: Props) => {
  const { width } = useWindowSize()
  const pathname = usePathname()
  const [container, setContainer] = useState<HTMLElement | null>(null)

  const isMobile = width <= 768
  const isNavigationOpen = isMobile ? open : true

  return (
    <>
      <nav
        className='fixed top-0 z-50 h-full bg-white focus-visible:!outline-none md:-translate-x-16'
        ref={(ref) => setContainer(ref)}
      />

      <Dialog.Root
        modal={false}
        open={isNavigationOpen}
        defaultOpen={isMobile}
        onOpenChange={setOpen}
      >
        <Dialog.Portal container={container}>
          <Dialog.Content className='DialogContent nav-border flex h-full w-16 justify-center py-12 focus-visible:!outline-none'>
            <Dialog.Description className='flex flex-col gap-4 self-end'>
              <Item
                onClick={() => setOpen(false)}
                href='/'
                isActive={pathname === '/'}
                title='Home'
              />

              <Item
                onClick={() => setOpen(false)}
                href='/projects'
                isActive={pathname.includes('/projects')}
                title='Projects'
              />
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

type ItemProps = {
  href: string
  title: string
  isActive: boolean
  onClick: () => void
}

const Item = ({ href, title, isActive, onClick }: ItemProps) => (
  <Link
    onClick={onClick}
    href={href}
    className={clsx(
      'cursor-pointer rounded-sm py-2 text-xl transition-colors [text-orientation:upright] [writing-mode:vertical-lr] hover:bg-accent hover:text-black lg:text-2xl',
      {
        'bg-accent text-black': isActive,
      },
    )}
  >
    {title}
  </Link>
)
