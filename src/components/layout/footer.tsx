export const Footer = async () => {
  const data = await fetch('https://webhooks.rokaskasperavicius.dev/api/meta')
  const result = await data.json()

  const date = new Date(result.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <footer className='mt-10 flex flex-row justify-between border-t-2 border-solid border-accent p-4 md:p-6 md:text-xl'>
      <div>Rokas Kasperavicius</div>
      <div>Last updated at: {date}</div>
    </footer>
  )
}
