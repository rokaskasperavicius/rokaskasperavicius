'use client'

import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { useEffect } from 'react'

type Props = {
  loop: boolean
  children: React.ReactNode
  className?: string
}

export const Carousel = ({ loop, children, className }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, skipSnaps: true }, [
    WheelGesturesPlugin({ forceWheelAxis: 'x' }),
  ])

  return (
    <div className={clsx('embla overflow-hidden', className)} ref={emblaRef}>
      <div className='embla__container flex w-full'>{children}</div>
    </div>
  )
}

type SlideProps = {
  autoWidth: boolean
  children: React.ReactNode
}

const Slide = ({ autoWidth, children }: SlideProps) => (
  <div
    className={clsx('embla__slide mr-2 min-w-0 max-w-full', {
      'flex-shrink-0 flex-grow basis-auto': autoWidth,
      'flex-shrink-0 flex-grow basis-full': !autoWidth,
    })}
  >
    {children}
  </div>
)

Carousel.Slide = Slide
