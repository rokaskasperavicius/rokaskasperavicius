type Props = {
  text: string
}

export const Technology = ({ text }: Props) => (
  <div className='flex flex-shrink-0 items-center justify-center whitespace-nowrap rounded-md border-2 border-solid border-primary-600 bg-primary-600 px-2 py-1 text-black'>
    {text}
  </div>
)
