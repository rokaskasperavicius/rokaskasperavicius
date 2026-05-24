type Props = {
  text: string
}

export const Technology = ({ text }: Props) => (
  <div className='border-primary-600 bg-primary-600 flex shrink-0 items-center justify-center rounded-md border-2 border-solid px-2 py-1 whitespace-nowrap text-black'>
    {text}
  </div>
)
