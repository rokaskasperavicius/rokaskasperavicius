type Props = {
  text: string
}

export const Technology = ({ text }: Props) => (
  <div className='flex flex-shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-md border-2 border-solid border-primary px-2 py-1 text-black transition-colors hover:bg-primary hover:text-white'>
    {text}
  </div>
)
