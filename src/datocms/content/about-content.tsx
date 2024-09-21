'use client'

import { DatoImage } from '@/components'
import { Technology } from '@/components/Technology'
import { AnimatePresence } from '@/components/shared/animate-presence'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import 'swiper/css'
import { Autoplay, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  HomePageRecord,
  ResponsiveImage,
  TechnologyRecord,
} from '@/foundation/datocms/types'

import { StructuredText } from '../components/structured-text'

type Props = {
  heading: string
  image: ResponsiveImage | null | undefined
  description: HomePageRecord['aboutDescription']
  technologiesHeading: string
  technologies: TechnologyRecord[]
}

export const AboutContent = ({
  heading,
  image,
  description,
  technologiesHeading,
  technologies,
}: Props) => (
  <AnimatePresence
    position='bottom'
    className='about-content-border space-y-4 p-4 md:p-10'
  >
    <h2 className='flex justify-center gap-1 text-xl sm:text-3xl'>{heading}</h2>

    <div className='flex flex-col justify-between gap-4 md:flex-row'>
      <div className='flex flex-col justify-around gap-4 sm:text-xl'>
        <StructuredText className='space-y-4 leading-8' content={description} />

        <div>
          <h5 className='my-2 sm:text-xl'>{technologiesHeading}</h5>

          <div className='grid'>
            <Swiper
              className='w-full'
              grabCursor={true}
              slidesPerView={'auto'}
              slideToClickedSlide={true}
              spaceBetween={10}
            >
              {technologies.map(({ id, title }) => (
                <SwiperSlide className='!w-auto' key={id}>
                  <Technology text={title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <p className='mt-2 font-pangolin sm:text-lg'>
            Try dragging me - there is more!
          </p>
        </div>
      </div>

      <div className='flex-shrink-0'>
        <DatoImage data={image} />
      </div>
    </div>
  </AnimatePresence>
)
