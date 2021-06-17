import React, { Component } from 'react'
import './searchBar.css'

export default class SearchBar extends Component {
   render() {
      return (
         <div className='search-bar'>
            <div>
               <form>
                  <label htmlFor="search"></label>
                  <input type="text" name='search' value='' placeholder='Title, Album, Artist...'></input>
                  <select id="filter" name="filter">
                     <option value="all">filter by. . .</option>
                     <option value="album">Album</option>
                     <option value="artist">Artist</option>
                     <option value="genre">Genre</option>
                     <option value="title">Title</option>
                     <option value="releaseDate">Release Date</option>

                  </select>
                  <input type="submit" name="Go" value=" Search "></input>
               </form>
            </div>
         </div>
      )
   }
}
