'use client'

import Icon from "./Icon";


export default function SearchBar({ placeholder = 'Search...', onSearch }) {

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="max-w-[1000px] px-4 py-2 border rounded-3xl border-gray-100 shadow-md focus:outline-none focus:ring-1 focus:ring-blue-500 font-body bg-white"
      />
    </div>
  );
}
