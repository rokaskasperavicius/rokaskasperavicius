import { request } from '@/foundation/datocms'
import { ProjectsDocument } from '@/foundation/datocms/types'

import { Projects } from './_content/projects'

export default async function Page() {
  const projects = await request(ProjectsDocument)

  return (
    <div className='space-y-10 px-4 py-6 sm:px-4 sm:py-10 md:p-10'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl'>
        Check Out My Projects
      </h1>

      <Projects projects={projects} />
    </div>
  )
}
