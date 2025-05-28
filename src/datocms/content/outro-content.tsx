import { AnimatePresence } from '@/components/shared/animate-presence'
import Link from 'next/link'

export const OutroContent = () => {
  return (
    <div className='overflow-hidden p-4 md:p-10'>
      <h2 className='text-center text-xl sm:text-3xl'>What&apos;s Next?</h2>

      <div className='mt-4 flex flex-col justify-center gap-20 text-lg sm:mt-8 sm:flex-row sm:text-2xl'>
        <div className="relative before:absolute before:bottom-[-54px] before:left-1/2 before:z-[1] before:w-10 before:-translate-x-1/2 before:bg-white before:text-center before:text-primary-100 before:content-['or'] after:absolute after:bottom-[-40px] after:left-1/2 after:h-0.5 after:w-2/3 after:-translate-x-1/2 after:bg-primary-600 sm:before:bottom-auto sm:before:left-auto sm:before:right-[-58px] sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:translate-x-0 sm:after:left-auto sm:after:right-[-40px] sm:after:top-0 sm:after:h-full sm:after:w-0.5 sm:after:rotate-12">
          <AnimatePresence position='left'>
            <>
              <p>
                Check my recent{' '}
                <span className='text-primary-100'>projects</span> 💻
              </p>
              <div className='flex gap-3 sm:mt-3'>
                <Link href='/projects' className='underline' passHref>
                  Read more
                </Link>
              </div>
            </>
          </AnimatePresence>
        </div>

        <div>
          <AnimatePresence position='right'>
            <>
              <p className='mt-0 sm:mt-24'>
                I would love to hear about your{' '}
                <span className='text-primary-100'>ideas</span> and{' '}
                <span className='text-primary-100'>projects</span>. Let&#39;s
                talk 💬
              </p>
              <div className='flex gap-3 sm:mt-3'>
                <Link
                  href='mailto:hello@rokaskasperavicius.dev'
                  className='underline'
                  passHref
                >
                  Write to me
                </Link>
              </div>
            </>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
