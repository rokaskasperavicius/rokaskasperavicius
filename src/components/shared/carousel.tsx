'use client'

import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { useCallback, useEffect, useState } from 'react'

import { ResponsiveImage } from '@/foundation/datocms/types'

import { DatoImage } from '../DatoImage'

type Props = {
  loop: boolean
  children: React.ReactNode
  className?: string
  showNavigation?: boolean
  thumbnails?: Array<ResponsiveImage | null | undefined>
}

export const Carousel = ({
  loop,
  showNavigation = false,
  thumbnails,
  children,
  className,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, skipSnaps: true }, [
    WheelGesturesPlugin({ forceWheelAxis: 'x' }),
  ])

  const goPrev = () => emblaApi?.scrollPrev()
  const goNext = () => emblaApi?.scrollNext()

  const getActive = useCallback(() => {
    if (!emblaApi) return

    setActiveIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    getActive()
    emblaApi.on('reInit', getActive).on('select', getActive)
  }, [emblaApi, getActive])

  return (
    <div>
      {thumbnails && showNavigation && (
        <div className='mb-2 flex items-center justify-end sm:justify-between'>
          <div className='hidden gap-2 sm:flex'>
            {thumbnails.map((thumbnail, index) => (
              <div
                key={index}
                className={clsx('cursor-pointer opacity-50', {
                  '!opacity-100': index === activeIndex,
                })}
                onClick={() => emblaApi?.scrollTo(index)}
              >
                <DatoImage
                  data={thumbnail}
                  className='h-10 !w-10'
                  pictureClassName='object-cover object-left'
                />
              </div>
            ))}
          </div>

          <div className='flex justify-end gap-2'>
            <div className='left-arrow' onClick={goPrev} />
            <div className='right-arrow' onClick={goNext} />
          </div>
        </div>
      )}

      <div className={clsx('embla overflow-hidden', className)} ref={emblaRef}>
        <div className='embla__container flex w-full'>{children}</div>
      </div>
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
