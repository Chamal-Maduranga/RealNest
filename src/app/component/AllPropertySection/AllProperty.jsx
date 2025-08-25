import { projects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'

function AllProperty() {
    return (
        <div>
            <h1 className='font-heading text-6xl md:text-7xl text-center py-20'>Projects</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-7 max-w-10/12 mx-auto'>
                {projects.map((p) => (
                    <Link href={`/properties/${p.id}`} key={p.id}>
                        <div className='grid grid-cols-2 gap-1.5 rounded-xl border-2 border-gray-100 hover:scale-102 duration-100 cursor-pointer'>
                            <div className='imageDiv  shadow-xl '>
                                <Image src={p.images[0]} width={350} height={600} alt={p.location} className='rounded-l-xl h-[350px]' />
                            </div>
                            <div className='detailsDiv flex flex-col items-left ml-2.5'>
                                <p className='font-heading text-center text-2xl md:text-4xl p-2'>{p.name}</p>
                                <div className='mt-3'>
                                    <p className='italic lowercase text-gray-400'>Price</p>
                                    <p className='font-body text-xl text-cyan-700'>{p.priceRange}</p>
                                </div>
                                <div className='mt-3 italic text-lg text-gray-400'>{p.description}</div>
                                <p className='text-gray-600'>{p.size}</p>
                                <p className='text-gray-600'>{p.status}</p>
                                <p className='text-cyan-600 uppercase'>{p.developer}</p> 
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default AllProperty
