'use client'

import { motion } from 'framer-motion'
import NextImage from 'next/image'

type Props = {
  src: string
  href: string
}

export const Icon = ({ src, href }: Props) => (
  <motion.div
    whileHover={{
      scale: 1.1,
    }}
  >
    <a href={href} target='_blank' rel='noreferrer' className='flex'>
      <NextImage
        src={src}
        alt='social media icon'
        className='cursor-pointer'
        height={40}
        width={40}
      />
    </a>
  </motion.div>
)
