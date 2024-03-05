import { IoIosSearch } from 'react-icons/io'

const Search = (): JSX.Element => {
  return (
    <div id='search'>
      <input
        type="search"
        placeholder="Nunca dejes de buscar"
      />
      <button><IoIosSearch /></button>
    </div>
  )
}

export default Search
