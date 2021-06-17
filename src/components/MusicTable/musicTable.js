import React, { Component } from 'react';
import './musicTable.css';
//import { uniqueItem } from '../../helper'

export default class MusicTable extends Component {
   render() {
      const tableRows = this.props.music.map((song) => {
         return <tr key={song.id}><td>{song.title}</td><td>{song.album}</td><td>{song.artist}</td><td>{song.genre}</td><td>{song.releaseDate}</td>
         </tr>
      })

      return (
         <div className='music-table'>
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
}
