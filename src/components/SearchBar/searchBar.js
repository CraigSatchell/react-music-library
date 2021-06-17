import React from 'react'
import './searchBar.css'

const SearchBar = (props) => {
      return (
         <div className='search-bar'>
            <div>
               <form onSubmit={(event) => props.handleSearchSubmit(event)}>
                  <label htmlFor="search"></label>
                  <input type="text" name='searchFor' onChange={props.handleSearchChange} value={props.searchBox} placeholder='Title, Album, Artist...'></input>
                  <select id="filter" onChange={props.handleSearchChange} name="filter" value={props.searchFilter}>
                     <option value="all">filter by. . .</option>
                     <option value="album">Album</option>
                     <option value="artist">Artist</option>
                     <option value="genre">Genre</option>
                     <option value="title">Title</option>
                     <option value="releaseDate">Release Date</option>

                  </select>
                  <input type="submit" name="Go" value="Search"></input>
               </form>
            </div>
         </div>
      )
   }

export default SearchBar;