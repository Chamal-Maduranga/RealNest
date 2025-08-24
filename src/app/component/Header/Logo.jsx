'use client'
import React from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

function Logo() {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = (e) => {
    if (pathname === '/') {
      // Already on home, scroll smoothly
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Navigate to home
      router.push('/')
    }
  }

  return (
    <div className='flex items-center'>
      <a onClick={handleClick}>
        <Image
          src='/Real_Nest_Logo_Black.png'
          width={110}
          height={150}
          alt="Real Nest Logo"
          className='opacity-70 hover:opacity-85 duration-200 cursor-pointer'
        />
      </a>
    </div>
  )
}

export default Logo
