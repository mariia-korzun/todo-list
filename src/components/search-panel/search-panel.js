import React from 'react'

const SearchPanel = ({onSearch}) => {
    return <input 
    onChange={onSearch}
    placeholder='type to search' 
    type="search" 
    className="form-control" />
}

export default SearchPanel