import { DatoImage } from '@/components'
import { StructuredText } from '@/datocms/components/structured-text'

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

  const { githubPrimaryUrl, githubSecondaryUrl } = project

  return (
    <div className='space-y-8 px-4 py-6 sm:px-4 sm:py-10 md:p-10'>
      <div className='space-y-4'>
        <div>
          <h1 className='text-2xl sm:text-3xl md:text-4xl'>{project.title}</h1>

          <div className='flex flex-col sm:text-lg'>
            {githubPrimaryUrl && (
              <a
                target='_blank'
                className='italic hover:underline'
                href={githubPrimaryUrl}
              >
                {githubPrimaryUrl}
              </a>
            )}

            {githubSecondaryUrl && (
              <a
                target='_blank'
                className='italic hover:underline'
                href={githubSecondaryUrl}
              >
                {githubSecondaryUrl}
              </a>
            )}
          </div>
        </div>

        <StructuredText
          content={project.description}
          className='leading-8 sm:text-xl'
        />
      </div>

      <div className='space-y-4'>
        {project.images.map((image, index) => (
          <DatoImage key={index} data={image.responsiveImage} />
        ))}
      </div>
    </div>
  )
}
