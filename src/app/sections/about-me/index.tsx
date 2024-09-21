import { DatoImage } from '@/components'
import { StructuredText, StructuredTextGraphQlResponse } from 'react-datocms'

import { ResponsiveImage } from '@/foundation/datocms/types'

type AboutMeProps = {
  aboutHeading: string
  aboutImage: ResponsiveImage | null | undefined
  aboutDescription: StructuredTextGraphQlResponse
}

export const AboutMe = ({
  aboutHeading,
  aboutImage,
  aboutDescription,
}: AboutMeProps) => {
  return (
    <div>
      <h2 className='flex justify-center gap-1 text-xl sm:text-2xl'>
        {aboutHeading}
      </h2>
      <div className='mt-4 flex justify-between gap-6'>
        <DatoImage
          data={aboutImage}
          // className='flex-shrink-0 self-start'
        />
        <div className='flex flex-col justify-around border-b border-r border-solid border-gray-300 pr-6 text-lg'>
          <div className='mt-2 sm:mt-4'>
            <StructuredText data={aboutDescription} />
          </div>
          {/* <div>
            <p className='my-2'>{data.technologySuffix}</p>
            <div className='flex flex-wrap gap-1'>
              {data.technologies.map((t) => (
                <Technology key={t.id} text={t.title} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
