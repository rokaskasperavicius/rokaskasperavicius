export const Footer = async () => {
  let date = null

  try {
    const data = await fetch('https://webhooks.rokaskasperavicius.dev/api/meta')
    const result = await data.json()

    date = new Date(result.date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {}

  return (
    <footer className='mt-10 flex flex-row justify-between border-t-2 border-solid border-accent p-4 md:p-6 md:text-xl'>
      <div>Rokas Kasperavicius</div>

      {date && <div>Last updated at: {date}</div>}
    </footer>
  )
}
