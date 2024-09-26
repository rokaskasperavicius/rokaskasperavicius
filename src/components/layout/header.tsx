'use client'

import { GITHUB_URL, LINKEDIN_URL } from '@/config/constants'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { HeaderMenu } from '../shared/header-menu'
import { Navigation } from './navigation'

const timeFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Copenhagen',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short',
  hour12: false,
})

const getTime = () => {
  const time = timeFormatter.formatToParts(new Date())

  return {
    hour: time[0].value,
    minute: time[2].value,
    timezone: time[4].value,
  }
}

export const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false)
  const [showSvg, setShowSvg] = useState<boolean>(false)

  const [hour, setHour] = useState<string>()
  const [minute, setMinute] = useState<string>()
  const [timezone, setTimezone] = useState<string>()

  useEffect(() => {
    const updateTime = () => {
      setHour(getTime().hour)
      setMinute(getTime().minute)
      setTimezone(getTime().timezone)
    }

    // Hydrate initial state with the current time
    updateTime()

    const interval = setInterval(() => {
      updateTime()
    }, 500)

    setTimeout(() => {
      setShowSvg(true)
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <header className='hero-border flex w-full items-end justify-between pr-2 md:text-xl'>
      <HeaderMenu onClick={() => setOpenNavigation(true)} />

      <Navigation open={openNavigation} setOpen={setOpenNavigation} />

      <p suppressHydrationWarning className='text-center md:pl-2'>
        {hour && minute && timezone && (
          <>
            {hour}
            <span className='animate-full-pulse'>:</span>
            {minute} {timezone}, Denmark
          </>
        )}
      </p>

      <div className='flex'>
        <div className='relative hidden md:block'>
          <div
            className={clsx(
              'absolute -left-24 top-0 font-pangolin transition-opacity',
              {
                'opacity-0': !showSvg,
              },
            )}
          >
            Let&apos;s connect!
          </div>

          <div className='relative top-0.5 w-28'>
            <svg
              strokeLinecap='round'
              strokeLinejoin='round'
              fill='#DED4CF'
              viewBox='0 0 550 300'
            >
              <path
                id='line'
                fill='none'
                stroke='#DED4CF'
                strokeWidth='10'
                d='M 18.9 128.6 c 62 33 186 99 311.3 28.5 c 37.3 -21 77.3 -108 -81.2 -92.3 c -175.5 17.3 -6 116.6 50 137.2 c 16.7 4.4 65 23 176 18'
              />

              <path
                id='arrow'
                stroke='#DED4CF'
                strokeWidth='12'
                d='M 0 -20 l 39 21 l -43 15 l 4 -36 z'
              />
            </svg>
          </div>
        </div>

        <div className='flex items-end gap-2 font-bold'>
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            target='_blank'
            href={LINKEDIN_URL}
            className='text-linkedin'
          >
            LinkedIn
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            target='_blank'
            href={GITHUB_URL}
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </header>
  )
}
