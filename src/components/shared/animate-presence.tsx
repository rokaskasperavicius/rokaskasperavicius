'use client'

import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

type Props = {
  children: React.ReactNode
  position: 'left' | 'right' | 'bottom'
  className?: string
  threshold?: number
  delay?: number
}

const INITIAL_POSITIONS = {
  left: {
    x: -20,
  },
  right: {
    x: 20,
  },
  bottom: {
    y: 20,
  },
}

export const AnimatePresence = ({
  children,
  position,
  className = '',
  threshold = 0.1,
  delay = 0,
}: Props) => {
  const [ref, inView, _] = useInView({ threshold, triggerOnce: true })

  const control = useAnimation()

  useEffect(() => {
    if (inView) control.start('visible')
    else control.start('hidden')
  }, [inView, control])

  return (
    <motion.div
      ref={ref}
      // If initial is set to 'hidden', the NextJS will render the component invisible on the server
      // We let the useEffect hide it on the client
      initial='visible'
      animate={control}
      variants={{
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
        },
        hidden: {
          ...INITIAL_POSITIONS[position],
          opacity: 0,
        },
      }}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
