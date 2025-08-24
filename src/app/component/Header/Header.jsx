import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Contact from './Contact'
import SearchBar from './SearchBar'
import MobileMenu from './MobileMenu'

function Header() {
  return (
    <div className='
    my-3.5
    md:my-0
    sticky 
    top-0 
    z-10 
    w-full 
    flex 
    flex-col 
    gap-3 
    justify-center 
    items-center 
    md:flex-row 
    md:justify-between 
    md:items-center 
    md:gap-7 
    md:h-[120px] 
    md:px-7 
    md:border-b 
    border-gray-400 
    bg-white'>
  <Logo/>
  <MobileMenu/>
  <Menu/>
  <SearchBar/>
  <Contact/>
</div>

  )
}

export default Header
