'use client'

import { DatoImage } from '@/components'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { ProjectRecord, ResponsiveImage } from '@/foundation/datocms/types'

type IntroProps = {
  featuredProject: ProjectRecord
}

export const Intro = ({ featuredProject }: IntroProps) => (
  <div className='flex min-h-[calc(100vh-2.5rem-61px)] w-full flex-col justify-between gap-52 p-4 py-10 md:p-10 2xl:min-h-[calc(100vh-10rem-61px)]'>
    <h1 className='space-y-1 text-2xl sm:space-y-2.5 sm:text-3xl md:text-4xl lg:text-5xl'>
      <div className='space-y-4 sm:space-y-8'>
        <div>
          Hi there! <span className='hand-emoji'>👋</span>
        </div>

        <div className='flex flex-col gap-1 sm:flex-row sm:gap-2.5'>
          <div>My name is Rokas,</div>

          <div className='relative h-8'>
            <div className='word absolute left-0 top-0'>motivated</div>
            <div className='word1 absolute left-0 top-0'>productive</div>
            <div className='word2 absolute left-0 top-0'>experienced</div>
            <div className='word3 absolute left-0 top-0'>confident</div>
            <div className='word4 absolute left-0 top-0'>consistent</div>
            <div className='word5 absolute left-0 top-0 whitespace-nowrap'>
              open-minded
            </div>
          </div>
        </div>
      </div>

      <div className='text-primary-100'>software developer</div>
      <div>
        with <span className='text-primary-100'>5+ years </span> of work
        experience.
      </div>
    </h1>

    <div className='flex justify-end'>
      {/* Featured */}
      {/* <motion.section whileHover='hover' className='group sm:max-w-96'>
        <Link href={`/projects/${featuredProject.slug}`}>
          <h3 className='text-xl md:text-2xl'>Featured Project 🚀</h3>

          <div className='flex cursor-pointer flex-col gap-4 rounded-md border-2 border-solid border-primary-600 p-4'>
            <DatoImage data={featuredProject.cover.responsiveImage} />

            <div className='flex flex-col justify-between gap-4'>
              <div className='space-y-2'>
                <h4 className='text-lg md:text-xl'>{featuredProject.title}</h4>
              </div>

              <div className='text-right text-lg group-hover:underline md:text-xl'>
                View Project
              </div>
            </div>
          </div>
        </Link>
      </motion.section> */}
    </div>
  </div>
)
