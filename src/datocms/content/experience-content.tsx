import { AnimatePresence } from '@/components/shared/animate-presence'

import { ExperienceRecordFragment } from '@/foundation/datocms/types'

import { StructuredText } from '../components/structured-text'

type Props = {
  heading: string
  experiences: ExperienceRecordFragment[]
}

export const ExperienceContent = ({ heading, experiences }: Props) => {
  return (
    <AnimatePresence
      position='bottom'
      className='experience-content-border space-y-4 p-4 md:p-10'
    >
      <h2 className='text-center text-xl sm:text-3xl'>{heading}</h2>

      <div className='before:bg-primary-600 relative z-10 space-y-8 before:absolute before:top-0 before:left-[10px] before:z-[-1] before:h-full before:w-px before:content-[""] sm:before:left-[14px]'>
        {experiences.map(({ id, title, date, description }) => (
          <div key={id} className='flex gap-2 sm:gap-4'>
            <div className='mt-1 sm:-mt-px'>
              <div className='bg-primary-600 ring-primary-700 flex h-5 w-5 items-center justify-center rounded-full text-xs ring-4 sm:h-7 sm:w-7 sm:text-lg sm:ring-8'>
                <span className='material-symbols-outlined notranslate'>
                  work
                </span>
              </div>
            </div>

            <div>
              <StructuredText
                className='leading-8 sm:text-2xl'
                content={title}
              />

              <p className='text-gray-400 sm:text-lg'>{date}</p>

              <StructuredText
                className='mt-2 leading-8 sm:text-xl'
                content={description}
              />
            </div>
          </div>
        ))}
      </div>
    </AnimatePresence>
  )
}
