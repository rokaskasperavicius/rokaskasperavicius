'use client'

import { useLottie } from 'lottie-react'
import { useEffect } from 'react'

import groovyWalkAnimation from './lottie_v3.json'

const style = {
  height: 100,
}

export const LogoLottie = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  }

  const { View, setSpeed, playSegments } = useLottie(options, style)

  useEffect(() => {
    // Repeating only the drawing part of the animation
    playSegments([80, 250], false)
    setSpeed(1)
  })

  return View
}
