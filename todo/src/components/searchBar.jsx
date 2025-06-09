import { useState } from 'react'
import '../App.css'

function SearchBar() {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <input type="text" className='w-1/2 p-2 rounded-md border border-gray-300 text-white' placeholder='Search...' value={input} onChange={handleChange} />
    )
}

export default SearchBar