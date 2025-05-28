import { AnimatePresence } from '@/components/shared/animate-presence'

import { ExperienceRecord } from '@/foundation/datocms/types'

import { StructuredText } from '../components/structured-text'

type Props = {
  heading: string
  experiences: ExperienceRecord[]
}

export const ExperienceContent = ({ heading, experiences }: Props) => {
  return (
    <AnimatePresence
      position='bottom'
      className='experience-content-border space-y-4 p-4 md:p-10'
    >
      <h2 className='text-center text-xl sm:text-3xl'>{heading}</h2>

      <div className='relative z-10 space-y-8 before:absolute before:left-[10px] before:top-0 before:z-[-1] before:h-full before:w-px before:bg-primary-600 before:content-[""] sm:before:left-[14px]'>
        {experiences.map(({ id, title, date, description }) => (
          <div key={id} className='flex gap-2 sm:gap-4'>
            <div className='mt-1 sm:-mt-px'>
              <div className='flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-xs ring-4 ring-primary-700 sm:h-7 sm:w-7 sm:text-lg sm:ring-8'>
                <span className='material-symbols-outlined'>work</span>
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
