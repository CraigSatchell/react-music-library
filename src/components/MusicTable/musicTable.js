import React from 'react';
import { Link } from 'react-router-dom';
import './musicTable.css';
//import { uniqueItem } from '../../helper'

const MusicTable = (props) => {
   const handleAddNewSongClick = () => {
      document.getElementById('add-new-song').classList.remove('collapsed');
   }
   const tableRows = props.music.map((song) => {
      return <tr key={song.id}><td><Link to="/song-details">{song.title}</Link></td><td>{song.album}</td><td>{song.artist}</td><td>{song.genre}</td><td>{song.releaseDate}</td><td><button onClick={() => { props.handleDeleteSong(song.id) }}>&nbsp;Delete&nbsp;</button></td>
      </tr>
   })

   return (
      <>
         <div className='add-song'>
            <button onClick={handleAddNewSongClick}>Add New Song</button>
            <div id='add-new-song' className='collapsed'>
               <form className='add-song-form' onSubmit={
                  (event) => {
                     props.handleAddSongSubmit(event);
                  }
               }>
                  <table>
                     <tr>
                        <td><input type="text" name='title' placeholder="Title" /></td>
                        <td><input type="text" name='album' placeholder="Album" /></td>
                        <td><input type="text" name='artist' placeholder="Artist" /></td>
                        <td><input type="text" name='genre' placeholder="Genre" /></td>
                        <td><input type="text" name='releaseDate' placeholder="Release Date" /></td>
                        <td><input type="submit" value="Save" /></td>
                     </tr>
                  </table>
               </form>
            </div>
         </div>

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
      </>
   )
}


export default MusicTable;