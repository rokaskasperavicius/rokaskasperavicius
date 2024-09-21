import { Image as DatoImageNative, ResponsiveImageType } from 'react-datocms'

type DatoImageProps = {
  data: ResponsiveImageType | null | undefined
}

export const DatoImage = ({ data }: DatoImageProps) => {
  if (!data) return null

  return <DatoImageNative className='rounded-sm' data={data} />
}
