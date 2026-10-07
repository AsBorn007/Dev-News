import { useState } from "react"

const SearchBar = () => {
    const [inputValue , setInputValue] = useState('')
    const [debaunce , setDebaaunce] = useState(false)
  return (
    <>
      <form className="mx-auto mt-4 w-full mb-6 max-w-md" role="search">
        <div className="group relative flex items-center rounded-full border border-slate-200 bg-white shadow-sm transition focus-within:border-[#e37af9] focus-within:shadow-lg focus-within:shadow-[#e37af9]/20 focus-within:ring-4 focus-within:ring-[#e37af9]/20">
          {/* Left icon */}
          <svg
            className="pointer-events-none ml-4 h-4 w-4 shrink-0 text-slate-400 transition group-focus-within:text-[#e37af9]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>

          <label htmlFor="search" className="sr-only">Search</label>
          <input
            type="search"
            id="search"
            placeholder="Search..."
            required
            className="w-full bg-transparent px-3 py-3 pr-28 text-sm text-slate-900 placeholder-slate-400 outline-none [&::-webkit-search-cancel-button]:hidden"
          />

          <button
            type="submit"
            aria-label="Search"
            className="absolute right-1.5 flex h-[calc(100%-12px)] items-center justify-center rounded-full bg-[#e37af9] px-5 text-sm font-semibold text-white shadow-md shadow-[#e37af9]/30 transition hover:bg-[#d65cf2] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#e37af9]/30"
          >
            Search
          </button>
        </div>
      </form>
    </>
  )
}

export default SearchBar