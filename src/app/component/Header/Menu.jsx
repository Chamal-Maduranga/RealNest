import React from 'react'
import Link from 'next/link'

function Menu() {

  const menuItems = [
    { name: 'Home', url: '/' },
    { name: 'Properties', url: '/properties' },
    { name: 'Off-Plan', url: '/off_Plan' },
    { name: 'Agents', url: '/agents' },
    { name: 'Contact', url: '/contact' },
  ]


  return (
    <div className='hidden md:flex gap-20 text-gray-800'>
      {menuItems.map((menuItem, index) => (
        <Link key={index} href={menuItem.url} className='hover:text-cyan-400 hover:translate-x-1 duration-150 text-xl tracking-wide'>{menuItem.name}</Link>
      ))}
    </div>
  )
}

export default Menu