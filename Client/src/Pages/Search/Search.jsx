import React, { useState } from 'react';
import LeftSide from '../HomeFile/leftSide'; // LeftSide
import './search.css'

import SearchBar from './SearchBar';
import SearchResultsList from './SearchResultsList';

const Search = () => {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      {/* LeftSide מוצג תמיד */}
      <div className="leftSideHome">
        <LeftSide />
      </div>

      <div className="middleSide">
         <div className='App2'>
          <div className='search-bar-container'>
            <SearchBar setResults={setResults}/>
            <SearchResultsList results={results}/>
          </div>

          </div>
      </div>

    
    </div>
  );
};

export default Search;
