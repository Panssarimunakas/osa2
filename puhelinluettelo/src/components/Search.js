const Search = (props) => {

  const {search, setSearch} = props

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return(
    <form>
      <div>
        search: <input value={search} onChange={handleSearchChange}/>
      </div>
    </form>
  )
}

export default Search