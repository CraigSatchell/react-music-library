import React from 'react'
import './searchBar.css'

const SearchBar = (props) => {
      return (
         <div className='search-bar'>
            <div>
                  <label htmlFor="search"></label>
                  <input type="text" name='searchFor' onChange={props.handleSearchBoxChange} value={props.searchBox} placeholder='Title, Album, Artist...'></input>
                  <select id="filter" onChange={props.handleSearchFilterChange} name="filter" value={props.searchFilter}>
                     <option value="all">filter by. . .</option>
                     <option value="album">Album</option>
                     <option value="artist">Artist</option>
                     <option value="genre">Genre</option>
                     <option value="title">Title</option>
                     <option value="releaseDate">Release Date</option>

                  </select>
            </div>
         </div>
      )
   }

export default SearchBar;