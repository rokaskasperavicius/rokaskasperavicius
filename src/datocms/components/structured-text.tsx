import clsx from 'clsx'
import { isStructuredText } from 'datocms-structured-text-utils'
import { StructuredText as StructuredTextNative } from 'react-datocms'

type Props = {
  content: any
  className?: string
}

export const StructuredText = ({ content, className }: Props) => {
  // DatoCMS is not fixing their types
  // and I am not writing a 50 line AST parser to fix the types :)
  if (!isStructuredText(content)) {
    throw new Error('Provided content is not in structured text format')
  }

  return (
    <div className={clsx('structured-text-wrapper', className)}>
      <StructuredTextNative data={content} />
    </div>
  )
}
