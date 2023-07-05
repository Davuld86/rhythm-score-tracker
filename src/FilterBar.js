import React,{useState} from 'react'

function FilterBar() {
    const [filterToggle, setToggle] = useState(false)
    const [nameSearch, setSearch] =useState('')
    const [sortBy,setSortBy] = useState('Song Name')

    function handleSort(e){
        setSortBy(e.target.value)
    }

  return (
    <div>
        <input type='text' placeholder='Search song name...' value={nameSearch} onChange={(e)=>setSearch(e.target.value)}></input>
        <label> Sort by...
            <select value={sortBy} onChange={(e)=> handleSort(e)}>
                <option>Song Name</option>
                <option>Score</option>
                <option>Date</option>
            </select>
            <input type='checkbox' value={filterToggle} onChange={(e)=> setToggle(e)}></input>
            </label>
    </div>
  )
}

export default FilterBar