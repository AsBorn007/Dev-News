import { useState } from "react"

const SearchBar = () => {
    const [inputValue , setInputValue] = useState('')
    const [debaunce , setDebaaunce] = useState(false)
  return (
    <div>
        <input className="border-2 rounded-full border-amber-50 text-white px-3 py-2" type="text" placeholder="Search News" />
    </div>
  )
}

export default SearchBar
