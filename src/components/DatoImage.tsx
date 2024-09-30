import clsx from 'clsx'
import { Image as DatoImageNative, ResponsiveImageType } from 'react-datocms'

type DatoImageProps = {
  data: ResponsiveImageType | null | undefined
  pictureClassName?: string
  className?: string
}

export const DatoImage = ({
  data,
  className,
  pictureClassName,
}: DatoImageProps) => {
  if (!data) return null

  return (
    <DatoImageNative
      className={clsx('rounded-sm', className)}
      pictureClassName={pictureClassName}
      data={data}
    />
  )
}
