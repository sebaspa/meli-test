import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { IoIosSearch } from 'react-icons/io'

const Search = (): JSX.Element => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    navigate(`/items?search=${search}`)
  }

  return (
    <div id='search'>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Nunca dejes de buscar"
          value={search}
          onChange={handleSearch}
        />
        <button type="submit"><IoIosSearch /></button>
      </form>
    </div>
  )
}

export default Search
