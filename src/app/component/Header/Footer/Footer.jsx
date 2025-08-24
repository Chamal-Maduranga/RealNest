import Link from 'next/link'
import React from 'react'

function Footer() {
    const menuItems = [
        { name: 'Home', url: '/' },
        { name: 'Properties', url: '/properties' },
        { name: 'Off-Plan', url: '/off_Plan' },
        { name: 'Agents', url: '/agents' },
        { name: 'Contact', url: '/contact' },
    ]
    return (
        <div className=''>
            <p className='font-heading text-2xl text-center mt-4'>Rial Nest</p>
            <div className='flex justify-center py-8'>
                <div className='flex gap-1 text-[12px] w-full justify-between'>
                    {menuItems.map((item, index) => (
                        <Link key={index} href={item.url} className='p-2 text-center bg-gray-200 w-full rounded-lg'>{item.name}</Link>
                    ))}
                </div>
            </div>
            
            <p className="text-center text-[11px] text-gray-500  mb-5">
                All rights reserved © 2025 <b>Rial Nest</b> . Designed Design Arcade One.
            </p>



        </div>
    )
}

export default Footer
