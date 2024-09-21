'use client'

import { LogoLottie } from './LogoLottie'

export const PageLoader = () => {
  // Disable loader during local development
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  return (
    <div className='absolute inset-0 z-50 flex items-center justify-center bg-white'>
      <LogoLottie />
    </div>
  )
}
