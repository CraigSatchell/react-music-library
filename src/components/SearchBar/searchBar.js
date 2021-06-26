import React from 'react'
import MusicTable from '../MusicTable/musicTable'
import './searchBar.css'

const SearchBar = (props) => {
   const filteredMusic = props.searchBox.length === 0 ? props.music : props.music.filter((song) => (song.title + ' ' + song.album + ' ' + song.artist + ' ' + song.genre + ' ' + song.releaseDate).toLowerCase().includes(props.searchBox.toLowerCase()))

   return (
      <>
         <div className='search-bar'>
            <form onSubmit={(event) => {
               props.handleSearchSubmit(event)
            }
            }>
               <label htmlFor='search'></label>
               <input type='text' name='searchFor'
                  onChange={props.handleSearchBoxChange}
                  value={props.searchBox}
                  placeholder='Title, Album, Artist...'></input>
               <input type="submit" value='Clear' />
            </form>
         </div>
         <MusicTable music={filteredMusic} newSong={props.newSong} handleAddSongSubmit={props.handleAddSongSubmit} handleDeleteSong={props.handleDeleteSong} />
      </>
   )
}

export default SearchBar
