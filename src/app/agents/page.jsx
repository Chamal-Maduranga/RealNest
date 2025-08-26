'use client'

import { Star } from "lucide-react";

import { agents } from '@/data/agent'

import Image from 'next/image'
import Link from 'next/link'

export default function AgentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-cyan-400 py-16 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-heading font-bold">Meet Our Agents</h1>
        <p className="mt-4 text-lg md:text-xl font-body">Trusted professionals to help you find your dream home</p>
      </div>

      {/* Agents Grid */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {agents.map((agent, id) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Agent Photo */}
            <div className="relative w-full h-64">
              <Image
                src={agent.image} // replace with your images
                alt={agent.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Agent Info */}
            <div className="p-6 text-center">
              <h2 className="text-2xl font-heading text-gray-800">{agent.name}</h2>
              <p className="text-gray-500">Real Estate Specialist</p>

              <div className="mt-4 flex justify-center gap-4">
                <Link
                  href="#"
                  className="px-4 py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition"
                >
                  {agent.contact}
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-50 transition"
                >
                  View Profile
                </Link>
              </div>
              <p className="flex text-yellow-400 w-full justify-center mt-2">
                  {Array(agent.review).fill().map((_, i) => (
                    <Star key={i} fill="currentColor" />
                  ))}
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
