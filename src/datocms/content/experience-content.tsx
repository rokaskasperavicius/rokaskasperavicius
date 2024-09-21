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

      <div className='experience-content space-y-8'>
        {experiences.map(({ id, title, date, description }, index) => (
          <div key={id}>
            <StructuredText className='leading-8 sm:text-2xl' content={title} />

            <p className='text-gray-400 sm:text-lg'>{date}</p>

            <StructuredText
              className='mt-2 leading-8 sm:text-xl'
              content={description}
            />
          </div>
        ))}
      </div>
    </AnimatePresence>
  )
}
