
import Icon from '@/app/component/Header/Icon'
import { projects } from '../../../data/projects'
import Image from 'next/image'
import Link from 'next/link'
import MobileImageSlider from '@/app/component/MobileImageSlider.jsx/MobileImageSlider'
import { Fullscreen } from 'lucide-react'
import Menu from '@/app/component/Header/Menu'

function page({ params }) {
  // Get the ID from the URL
  const projectId = parseInt(params.id)

  // Find the project with matching ID
  const project = projects.find(p => p.id === projectId)
  const imagesHight = 300
  const imagesWidth = 230
  const classNameForImages = 'rounded-2xl ml-1 hover:opacity-100 cursor-pointer border-2 border-white'



  // If project not found, show error
  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl">Project not found!</h1>
        <Link href="/properties" className="text-blue-500 underline">
          Go back to properties
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="hidden md:flex desktop">
        <div className="max-w-10/12 mx-auto p-6">
          <span className='flex w-fit p-2 border-2 border-gray-200'>
            <Link href={'/properties'} className='flex items-center'>
              <Icon name='backArrowIcon' size={34} color='#A9A9A9' />
              <span className='text-[#A9A9A9] pb-1'>Back</span>
            </Link>
          </span>
          {/* Project details */}
          <div>
            <div className='mt-5 flex'>
              {/* Main Image */}
              <div>
                <Image src={project.images[0]} height={800} width={600} alt={project.name} className='rounded-3xl' />
              </div>
              {/* Other Images */}
              <div>
                <div className="relative flex flex-col items-center h-full">
                  <Image src={project.images[1]} height={imagesHight} width={imagesWidth} alt={project.name} className={classNameForImages} />
                  <Image src={project.images[2]} height={imagesHight} width={imagesWidth} alt={project.name} className={classNameForImages} />
                  <Image src={project.images[3]} height={imagesHight} width={imagesWidth} alt={project.name} className={classNameForImages} />
                  <Image src={project.images[4]} height={imagesHight} width={imagesWidth} alt={project.name} className={classNameForImages} />
                  <Image src={project.images[5]} height={imagesHight} width={imagesWidth} alt={project.name} className={classNameForImages} />
                </div>
              </div>
              <div>
                {/* Project info */}
                <div className='ml-10'>
                  <h1 className="text-7xl font-bold mb-4 font-heading">{project.name}</h1>
                  <div className="space-y-3 mb-6">
                    <p><strong>Type:</strong> {project.type}</p>
                    <p><strong>Size:</strong> {project.size}</p>
                    <p><strong>Status:</strong> {project.status}</p>
                    <p><strong>Developer:</strong> {project.developer}</p>
                    <p><strong>Completion Date:</strong> {project.completionDate}</p>
                  </div>
                  <div className="text-4xl font-bold text-cyan-500 mb-4">
                    {project.priceRange}
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Description</h3>
                    <i className="text-gray-700">{project.description}</i>
                    <div>
                      {/* Map Embed */}
                      {project.mapUrl && (
                        <div className="mt-8 w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
                          <iframe
                            src={project.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            </div>
          </div>
        </div>
      </div>


      <div className="mobile md:hidden">

        <span className='flex w-fit p-2 border-2 border-gray-200'>
          <Link href={'/properties'} className='flex items-center'>
            <Icon name='backArrowIcon' size={34} color='#A9A9A9' />
            <span className='text-[#A9A9A9] pb-1'>Back</span>
          </Link>
        </span>

        <p className='text-center font-heading text-5xl mb-4'>{project.name}</p>

        <div className='images'>
          <Image src={project.images[0]} width={450} height={200} alt={project.name} />
        </div>

        <div>
          <div className="space-y-3 mb-6 font-body border-1 border-gray-200 p-4 m-2 rounded-2xl bg-amber-50">
            <p className='text-gray-700 uppercase'><strong className='text-gray-600 uppercase'>Type:</strong> {project.type}</p>
            <p className='text-gray-700 uppercase'><strong className='text-gray-600 uppercase'>Size:</strong> {project.size}</p>
            <p className='text-gray-700 uppercase'><strong className='text-gray-600 uppercase'>Status:</strong> {project.status}</p>
            <p className='text-gray-700 uppercase'><strong className='text-gray-600 uppercase'>Developer:</strong> {project.developer}</p>
            <p className='text-gray-700 uppercase'><strong className='text-gray-600 uppercase'>Completion Date:</strong> {project.completionDate}</p>
          </div>

          <div>
            <Image src={project.images[1]} width={450} height={200} alt={project.name} />
            <Image src={project.images[2]} width={450} height={200} alt={project.name} />
            <Image src={project.images[3]} width={450} height={200} alt={project.name} />
            <Image src={project.images[4]} width={450} height={200} alt={project.name} />
            <Image src={project.images[5]} width={450} height={200} alt={project.name} />
          </div>

        </div>
        <div className='rounded-3xl m-2'>
          <p className='font-body text-sm text-gray-400 mt-8 text-center'>Google Map</p>
          {project.mapUrl && (
            <div className="flex justify-center w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={project.mapUrl}
                width="90%"
                height="94%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='rounded-2xl'
              
              ></iframe>
            </div>
          )}
        </div>




      </div>
    </div>





  )
}

export default page










