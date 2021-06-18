import React, { Component } from 'react'
import './searchBar.css'

class SearchBar extends Component {
   constructor(props) {
      super(props);
      this.state = {};
      //const searchData = {};
}

   componentDidMount() {
      console.log(this.props.searchBox);
      
   }
   render() {
      return (
         <div className='search-bar'>
            <div>
               <form onSubmit={(event) => this.props.handlerSearchSubmit(event)}>
                  <label htmlFor="search"></label>
                  <input type="text" name='searchFor' onChange={this.props.handlerSearchChange} value={this.props.searchBox} placeholder='Title, Album, Artist...'></input>
                  <select id="filter" onChange={this.props.handlerSearchChange} name="filter" value={this.props.searchFilter}>
                     <option className="select-option" value="all">filter by. . .</option>
                     <option className="select-option" value="album">Album</option>
                     <option className="select-option" value="artist">Artist</option>
                     <option className="select-option" value="genre">Genre</option>
                     <option className="select-option" value="title">Title</option>
                     <option className="select-option" value="releaseDate">Release Date</option>
                  </select>
                  <input type="submit" name="Go" value="Search"></input>
               </form>
            </div>
         </div>
      )
   }
}

export default SearchBar;