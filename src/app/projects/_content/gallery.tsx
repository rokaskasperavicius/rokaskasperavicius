'use client'

import { DatoImage } from '@/components'
import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'

import { FileField } from '@/foundation/datocms/types'

type Props = {
  images: FileField[]
}

export const Gallery = ({ images }: Props) => (
  <PhotoProvider>
    {images.map((image) => (
      <PhotoView key={image.id} src={image.responsiveImage?.src}>
        <div>
          <DatoImage data={image.responsiveImage} />
        </div>
      </PhotoView>
    ))}
  </PhotoProvider>
)
