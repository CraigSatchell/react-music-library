import React from 'react';
import { Link } from 'react-router-dom';
import './musicTable.css';
//import { uniqueItem } from '../../helper'

const MusicTable = (props) => {

   const tableRows = props.music.map((song) => {
      return <tr key={song.id}><td><Link to="/song-details">{song.title}</Link></td><td>{song.album}</td><td>{song.artist}</td><td>{song.genre}</td><td>{song.releaseDate}</td><td><button onClick={() => { props.handleDeleteSong(song.id) }}>&nbsp;Delete&nbsp;</button></td>
      </tr>
   })

   return (
      <div className='music-table'>
         <h2>Library</h2>
         <table>
            <thead>
               <tr>
                  <th>Title</th><th>Album</th><th>Artist</th><th>Genre</th><th>Release Date</th><th>Action</th>
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