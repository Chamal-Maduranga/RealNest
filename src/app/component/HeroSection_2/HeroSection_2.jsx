import React from 'react'
import { projects } from '@/data/projects'
import Link from 'next/link'
import Image from 'next/image'

function HeroSection_2() {
    return (
        <div>
            {projects.map((item) => {

                return (
                    <Link href={`/properties/${item.id}`} key={item.id}>
                        <div className='font-body mt-4 text-gray-400'>
                            <p className='text-center'>{item.name}</p>
                            <p className='font-heading text-center mb-2'>{item.description}</p>
                            <div className='relative w-10/12 h-60 mx-auto rounded-4xl'>

                                <Image src={item.images[0]} fill objectFit='cover ' className='rounded-4xl' alt={item.name} />
                            </div>
                            <p className='text-center font-heading capitalize text-cyan-700 border-1 mx-15 mb-4 mt-1 rounded-4xl bg-gray-100'>{item.priceRange}</p>

                        </div>
                    </Link>
                )

            })}
        </div>
    )
}

export default HeroSection_2
