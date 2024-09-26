'use client'

import { DatoImage } from '@/components/DatoImage'
import { Technology } from '@/components/Technology'
import { motion } from 'framer-motion'
import Link from 'next/link'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ProjectsQuery } from '@/foundation/datocms/types'

type Props = {
  projects: ProjectsQuery
}

export const Projects = ({ projects }: Props) => (
  <Swiper
    className='w-full'
    cssMode={true}
    slidesPerView={'auto'}
    slideToClickedSlide={true}
    spaceBetween={10}
  >
    {projects.allProjects.map((project) => (
      <SwiperSlide key={project.slug}>
        <Link href={`/projects/${project.slug}`} className='group'>
          <div className='flex flex-col gap-4 rounded-md border-2 border-solid border-accent p-4 sm:flex-row'>
            <div className='flex-shrink-0 sm:w-2/3'>
              <DatoImage data={project.cover.responsiveImage} />
            </div>

            <div className='flex flex-col justify-between gap-4'>
              <div className='space-y-1 sm:space-y-4'>
                <h4 className='text-lg md:text-2xl'>{project.title}</h4>

                <div className='flex flex-wrap gap-1'>
                  {project.technologies.map((technology) => (
                    <Technology text={technology.title} key={technology.id} />
                  ))}
                </div>
              </div>

              <div className='text-right text-lg group-hover:underline md:text-xl'>
                View Project
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    ))}
  </Swiper>
)
