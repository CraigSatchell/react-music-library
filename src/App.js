import React, { useState, useEffect } from 'react'
import NavigatorBar from './components/NavigatorBar/navigatorBar';
import MusicTable from './components/MusicTable/musicTable';

import './App.css';
import axios from 'axios';

const App = () => {

  const [state, setState] = useState({
    music: [],
    searchBox: '',
    searchFilter: ''
  })


  // Filter by album
  const filterByAlbum = (searchFor) => {
    let matchedSongs = state.music.filter((song) => { return song.album.toLowerCase().includes(searchFor) });
    return matchedSongs;
  }


  // Filter by genre
  const filterByGenre = (searchFor) => {
    let matchedSongs = state.music.filter((song) => { return song.genre.toLowerCase().includes(searchFor) });
    return matchedSongs;
  }

  // Filter by artist
  const filterByArtist = (searchFor) => {
    let matchedSongs = state.music.filter((song) => { return song.artist.toLowerCase().includes(searchFor) });
    return matchedSongs;

  }

  // Filter by artist
  const filterByTitle = (searchFor) => {
    let matchedSongs = state.music.filter((song) => { return song.title.toLowerCase().includes(searchFor) });
    return matchedSongs;

  }


  // Filter by release date
  const filterByReleaseDate = (searchFor) => {
    let matchedSongs = state.music.filter((song) => { return song.releaseDate.toLowerCase().includes(searchFor) });
    return matchedSongs;

  }


  // Handle search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  }


  // Handle search change
  const handleSearchChange = (event) => {
    setState({...state,
      [event.target.name]: event.target.value
    })
  }


  useEffect(() => {
    try {
      axios.get('http://www.devcodecampmusiclibrary.com/api/music')
        .then(response => setState({...state,
          music: response.data
        }));
    } catch (e) {
      console.log(e);
    }
    filterByAlbum('rubber');

  });


  return (
    <div className='container'>
      <div className="header">
        <NavigatorBar />
      </div>

      <div className="contents">
        {state.music ? <MusicTable music={state.music} searchBox={state.searchBox} searchFilter={state.searchFilter} filterArtist={filterByArtist} filterAlbum={filterByAlbum} filterGenre={filterByGenre} filterTitle={filterByTitle} filterReleaseDate={filterByReleaseDate} handleSearchSubmit={handleSearchSubmit} handleSearchChange={handleSearchChange} /> : <p>Loading...</p>}
        {/*state.music ? console.log(filterByAlbum('rubber')) : <p>Loading...</p>*/}
      </div>

      <div className="footer">
      </div>
    </div>
  )
}

export default App;
