'use client'

import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-cyan-400 py-16 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-heading font-bold">Contact Us</h1>
        <p className="mt-4 text-lg md:text-xl font-body">We’d love to hear from you!</p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 flex-grow">
        
        {/* Left: Contact Info */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-heading mb-6 text-cyan-500">Get in Touch</h2>
          <ul className="space-y-4 text-gray-600 font-body">
            <li className="flex items-center gap-3">
              <Mail className="text-cyan-400" />
              contact@yourcompany.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-cyan-400" />
              +971 123 4567
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-cyan-400" />
              Dubai, United Arab Emirates
            </li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-heading mb-6 text-cyan-500">Send a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-cyan-400 text-white py-3 rounded-lg hover:bg-cyan-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
