import React,{useState} from 'react'

function FilterBar({handleDeleteMode, deleteMode, handleSort, handleSearch}) {
    

    const [nameSearch, setSearch] =useState('')
    const [sortBy,setSortBy] = useState('Date (recent)')

   
  return (
    <div>
        <input type='text' placeholder='Search song name...' value={nameSearch} onChange={(e)=>{setSearch(e.target.value);handleSearch(e)}}></input>
        <label> Sort by...
            <select value={sortBy} onChange={(e)=>{setSortBy(e.target.value);handleSort(e)}}>
                <option>Song Name (A-Z) </option>
                <option>Score (high to low)</option>
                <option>Date (recent)</option>
            </select>   
            </label>
            <label>
                Remove scores
                <input type='checkbox' checked={deleteMode} onChange={(e)=> handleDeleteMode(e)}></input>
            </label>
    </div>
  )
}

export default FilterBar