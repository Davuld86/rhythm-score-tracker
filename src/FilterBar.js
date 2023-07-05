import React,{useState} from 'react'

function FilterBar() {
    const [deleteMode,setDeleteMode] = useState(false)
    const [nameSearch, setSearch] =useState('')
    const [sortBy,setSortBy] = useState('Date (recent)')

    function handleSort(e){
        setSortBy(e.target.value)
    }

    function handleDeleteMode(e){
        setDeleteMode(e.target.value)
    }

  return (
    <div>
        <input type='text' placeholder='Search song name...' value={nameSearch} onChange={(e)=>setSearch(e.target.value)}></input>
        <label> Sort by...
            <select value={sortBy} onChange={(e)=> handleSort(e)}>
                <option>Song Name (A-Z) </option>
                <option>Score (high to low)</option>
                <option>Date (recent)</option>
            </select>   
            </label>
            <label>
                Remove scores
                <input type='checkbox' value={deleteMode} onChange={(e)=> handleDeleteMode(e)}></input>
            </label>

    </div>
  )
}

export default FilterBar