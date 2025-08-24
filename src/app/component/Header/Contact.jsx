import React from 'react'
import Icon from '../Header/Icon'

function Contact() {
  return (

      <button className="hidden md:flex items-center gap-2 px-8 py-4 border-1 border-gray-300 hover:bg-blue-200 duration-200 rounded-lg cursor-pointer">
        <Icon name="contact" size={20} color="#389CE0" />
        Contact Us
      </button>

  )
}

export default Contact
