import clsx from 'clsx'

type Props = {
  onClick: () => void
}

export const HeaderMenu = ({ onClick }: Props) => (
  <div
    className='z-40 mb-1.5 flex h-6 cursor-pointer flex-col justify-between pl-1 md:hidden'
    onClick={onClick}
  >
    <HeaderMenuItem className='w-6' />
    <HeaderMenuItem className='w-8' />
    <HeaderMenuItem className='w-5 ' />
  </div>
)

const HeaderMenuItem = ({ className }: { className: string }) => (
  <div className={clsx('h-0.5 rounded-xl bg-primary', className)} />
)
