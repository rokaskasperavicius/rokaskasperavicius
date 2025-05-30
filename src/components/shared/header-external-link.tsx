import clsx from 'clsx'
import { motion } from 'framer-motion'

type Props = {
  href: string
  children: React.ReactNode
  className?: string
}

export const HeaderExternalLink = ({ href, children, className }: Props) => {
  return (
    <motion.a
      whileHover={{
        scale: 1.05,
      }}
      target='_blank'
      href={href}
      className={clsx('flex items-start gap-px', className)}
    >
      <div>{children}</div>

      <div className='relative text-xs md:bottom-1 md:text-base'>
        <span className='material-symbols-outlined'>open_in_new</span>
      </div>
    </motion.a>
  )
}
