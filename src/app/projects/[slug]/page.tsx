import { DatoImage } from '@/components'

import { request } from '@/foundation/datocms'
import { ProjectDocument, ProjectsDocument } from '@/foundation/datocms/types'

export async function generateStaticParams() {
  const projects = await request(ProjectsDocument)

  return projects.allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { project } = await request(ProjectDocument, { slug: params.slug })

  if (!project) {
    return null
  }

  return (
    <div className='space-y-8 px-4 py-6 sm:px-4 sm:py-10 md:p-10'>
      <div className='space-y-4'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl'>{project.title}</h1>

        {project.githubUrl && (
          <a
            target='_blank'
            className='italic hover:underline sm:text-lg'
            href={project.githubUrl}
          >
            {project.githubUrl}
          </a>
        )}

        <p className='sm:text-lg'>{project.description}</p>
      </div>

      <div className='space-y-4'>
        {project.images.map((image, index) => (
          <DatoImage key={index} data={image.responsiveImage} />
        ))}
      </div>
    </div>
  )
}
