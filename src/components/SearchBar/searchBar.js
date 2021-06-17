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
                  <input type="submit" name="Go" value=" Search "></input>
               </form>
            </div>
         </div>
      )
   }
}
