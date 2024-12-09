import React, { useState } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.css"

export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json())
            .then(json => {
                console.log(json)
                const results = json.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value)
                    );
                })
                setResults(results)
            });
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div className='input-wrapper'>
            <SearchIcon id="search-icon" />
            <input className='input-input-wrapper' type="text" placeholder='Type To Search...' value={input}
                onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}


export default SearchBar;
