'use client'

import { useState } from "react";
import { projects } from "@/data/projects"; // your projects array
import Image from "next/image";

export default function SearchBar({ placeholder = 'Search...' }) {
  const [query, setQuery] = useState("");

  // Filter projects by name (or any field you like)
  const results = query
  ? projects.filter((project) =>
      project.name.toLowerCase().includes(query.toLowerCase())
    )
  : [];


  return (
    <div className="relative">
      {/* Input */}
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="max-w-[1000px] px-4 py-2 border rounded-3xl border-gray-200 shadow-md focus:outline-none focus:ring-1 focus:ring-blue-500 font-body bg-white mb-4 text-body text-gray-500"
      />

      {/* Results */}
      <ul className="space-y-2">
        {results.length > 0 ? (
          results.map((project, index) => (
            <li
              key={index}
              className="p-3 shadow-sm hover:bg-gray-100 cursor-pointer"
            >
              <div className='font-body mt-4 text-gray-400'>
                                          <p className='text-center'>{project.name}</p>
                                          <p className='font-heading text-center mb-2'>{project.description}</p>
                                          <div className='relative w-10/12 h-60 mx-auto rounded-4xl'>
              
                                              <Image src={project.images[0]} fill objectFit='cover ' className='rounded-4xl' alt={project.name} />
                                          </div>
                                          <p className='text-center font-heading capitalize text-cyan-700 border-1 mx-15 mb-4 mt-1 rounded-4xl bg-gray-100'>{project.priceRange}</p>
              
                                      </div>
            </li>
          ))
        ) : (
          query && <p className="text-gray-400">No results found</p>
        )}
      </ul>
    </div>
  );
}
