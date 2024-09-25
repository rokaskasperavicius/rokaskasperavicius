'use client'

import { DatoImage } from '@/components'
import { motion } from 'framer-motion'
import Link from 'next/link'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ResponsiveImage } from '@/foundation/datocms/types'

type Props = {
  title: string
  coverImage: ResponsiveImage | null | undefined
  slug: string
}

export const Projects = ({ projects }: { projects: any }) => (
  <Swiper
    className='w-full'
    cssMode={true}
    slidesPerView={'auto'}
    slideToClickedSlide={true}
    spaceBetween={10}
  >
    {projects.allProjects.map((project: any) => (
      <SwiperSlide key={project.slug}>
        <ProjectContent
          slug={project.slug}
          coverImage={project.images[0].responsiveImage}
          title={project.title}
        />
      </SwiperSlide>
    ))}
  </Swiper>
)

const ProjectContent = ({ title, coverImage, slug }: Props) => (
  <motion.section whileHover='hover' className='group'>
    <Link href={`/projects/${slug}`}>
      <div className='flex flex-col gap-4 rounded-md border-2 border-solid border-accent p-4 sm:flex-row'>
        <div className='overflow-hidden sm:w-2/3'>
          <motion.div
            variants={{
              hover: { scale: 1.1 },
            }}
          >
            <DatoImage data={coverImage} />
          </motion.div>
        </div>

        <div className='flex flex-1 flex-col justify-between text-right'>
          <div className='space-y-2'>
            <h4 className='text-lg md:text-2xl'>{title}</h4>
          </div>

          <div className='text-lg group-hover:underline md:text-xl'>
            View Project
          </div>
        </div>
      </div>
    </Link>
  </motion.section>
)
