'use client'

import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

export const Mouse = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [show, setShow] = useState(false)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    setTimeout(() => setShow(true), 5000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!show) return null

  return (
    <div
      className={clsx('mousey', {
        'fade-in': scrollPosition > 100,
      })}
    >
      <div className='scroller'></div>
    </div>
  )
}
