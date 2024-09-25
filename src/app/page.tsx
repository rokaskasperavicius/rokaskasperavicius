import { AboutContent } from '@/datocms/content/about-content'
import { ExperienceContent } from '@/datocms/content/experience-content'
import { OutroContent } from '@/datocms/content/outro-content'

import { request } from '@/foundation/datocms'
import { HomePageDocument } from '@/foundation/datocms/types'

import { Intro } from './sections'

export default async function Home() {
  const pageData = await request(HomePageDocument)

  if (!pageData.homePage) return null

  const {
    featuredProject,
    aboutHeading,
    aboutDescription,
    aboutImage,
    technologiesHeading,
    technologies,
    experiences,
    experiencesHeading,
  } = pageData.homePage

  return (
    <div className='space-y-10 md:space-y-20'>
      {/* intro-section */}
      <Intro featuredProjectImage={featuredProject.cover.responsiveImage} />

      {/* about-me section */}
      <AboutContent
        heading={aboutHeading}
        image={aboutImage.responsiveImage}
        description={aboutDescription}
        technologiesHeading={technologiesHeading}
        technologies={technologies}
      />

      {/* experience section */}
      <ExperienceContent
        heading={experiencesHeading}
        experiences={experiences}
      />

      {/* outro section */}
      <OutroContent />
    </div>
  )
}
