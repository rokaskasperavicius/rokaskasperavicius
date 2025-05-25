'use client'

import { useEffect } from 'react'

export const LoadSymbolsFont = () => {
  useEffect(() => {
    const font = new FontFace(
      'Material Symbols Outlined',
      'url(/MaterialSymbolsOutlined.ttf)',
      { display: 'block', style: 'normal' },
    )

    font.load().then(() => {
      document.fonts.add(font)
      document.documentElement.classList.add('font-loaded')
    })
  }, [])

  return null
}
