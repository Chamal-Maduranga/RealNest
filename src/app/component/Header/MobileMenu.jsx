'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Icon from './Icon'

function MobileMenu() {

    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    const menuItems = [
        { name: 'Home', url: '/' },
        { name: 'Properties', url: '/properties' },
        { name: 'Off-Plan', url: '/off_Plan' },
        { name: 'Agents', url: '/agents' },
        { name: 'Contact', url: '/contact' },
    ]
    return (
        <div className='md:hidden'>
            <div
                onClick={() => (toggleMenu())}
                className='absolute top-0 right-0 p-5 opacity-50'>
                <Icon name={'opener'} size={24} color={'cyan-400'} />
            </div>
            <div className={`fixed top-0 right-0 w-6/12 h-screen bg-gray/10 backdrop-blur-[50px] z-10  duration-300 ${menuOpen ? 'translate-x-full' : 'translate-x-0'} `}>
                <div
                    onClick={() => (toggleMenu())}
                    className='p-8 '>

                    <Icon name={'closer'} size={24} color={'cyan-400'} />
                </div>
                <div className='mt-50 text-white text-center'>
                    {menuItems.map((item, i) => (
                        <div key={i} className=' py-8 bg-cyan-600'>
                            <Link href={`${item.url}`} className='text-2xl font-heading'>{item.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MobileMenu
