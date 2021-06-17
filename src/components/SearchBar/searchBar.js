import React, { Component } from 'react'
import './searchBar.css'

export default class SearchBar extends Component {
   render() {
      return (
         <div className='search-bar'>
            <div>
               <form onSubmit={(event) => this.props.handlerSearchSubmit(event)}>
                  <label htmlFor="search"></label>
                  <input type="text" name='searchFor' onChange={this.props.handlerSearchChange} value={this.props.searchBox} placeholder='Title, Album, Artist...'></input>
                  <select id="filter" onChange={this.props.handlerSearchChange} name="filter" value={this.props.searchFilter}>
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
}
