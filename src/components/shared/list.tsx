type Props = {
  children: React.ReactNode
}

export const List = ({ children }: Props) => {
  return <ul className='list-inside list-disc space-y-1'>{children}</ul>
}

const ListItem = ({ children }: Props) => {
  return <li className='text-lg'>{children}</li>
}

List.Item = ListItem
