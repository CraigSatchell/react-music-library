import React from 'react';
import SearchBar from '../SearchBar/searchBar';
import './musicTable.css';
//import { uniqueItem } from '../../helper'

const MusicTable = (props) => {

   const tableRows = props.music.map((song) => {
      return <tr key={song.id}><td>{song.title}</td><td>{song.album}</td><td>{song.artist}</td><td>{song.genre}</td><td>{song.releaseDate}</td>
      </tr>
   })

   return (
      <div className='music-table'>
         <SearchBar searchBox={props.searchBox} searchFilter={props.searchFilter}/>
         <h3>Library Listing</h3>
         <table>
            <thead>
               <tr>
                  <th>Title</th><th>Album</th><th>Artist</th><th>Genre</th><th>Release Date</th>
               </tr>
            </thead>
            <tbody>
               {tableRows}
            </tbody>
         </table>
      </div>
   )
}


export default MusicTable;