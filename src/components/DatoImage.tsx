import { Image as DatoImageNative, ResponsiveImageType } from 'react-datocms'

type DatoImageProps = {
  data: ResponsiveImageType | null | undefined
  pictureClassName?: string
}

export const DatoImage = ({ data, pictureClassName }: DatoImageProps) => {
  if (!data) return null

  return (
    <DatoImageNative
      className='rounded-sm'
      pictureClassName={pictureClassName}
      data={data}
    />
  )
}
