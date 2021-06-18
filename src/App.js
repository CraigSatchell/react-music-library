/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import NavigatorBar from './components/NavigatorBar/navigatorBar';
import MusicTable from './components/MusicTable/musicTable';
import SearchBar from './components/SearchBar/searchBar';

//import Search from './components/simpleSearch/simpleSearch';

import './App.css';
import axios from 'axios';

const App = () => {

  const [music, setMusic] = useState([]);
  const [searchBox, setSearchBox] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  // // Filter by album
  // const filterByAlbum = (searchFor) => {
  //   let matchedSongs = music.music.filter((song) => { return song.album.includes(searchFor.toLowerCase()) });
  //   return matchedSongs;
  // }


  // // Filter by genre
  // const filterByGenre = (searchFor) => {
  //   let matchedSongs = music.filter((song) => { return song.genre.toLowerCase().includes(searchFor.toLowerCase()) });
  //   return matchedSongs;
  // }

  // // Filter by artist
  // const filterByArtist = (searchFor) => {
  //   let matchedSongs = music.filter((song) => { return song.artist.toLowerCase().includes(searchFor.toLowerCase()) });
  //   return matchedSongs;

  // }

  // // Filter by artist
  // const filterByTitle = (searchFor) => {
  //   let matchedSongs = music.filter((song) => { return song.title.toLowerCase().includes(searchFor.toLowerCase()) });
  //   return matchedSongs;

  // }


  // // Filter by release date
  // const filterByReleaseDate = (searchFor) => {
  //   let matchedSongs = music.filter((song) => { return song.releaseDate.toLowerCase().includes(searchFor.toLowerCase()) });
  //   return matchedSongs;

  // }


  // Handle search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
  }


  // Handle search change
  const handleSearchBoxChange = (event) => {
    setSearchBox(event.target.value)
    console.log(event.target.name);
    console.log('Handling search change...', searchBox);
  }

  // Handle search change
  const handleSearchFilterChange = (event) => {
    setSearchFilter(event.target.value)
    console.log(event.target.name);
    console.log('Handling search change...', searchFilter);
  }




  const getMusicData = () => {
    axios.get('http://www.devcodecampmusiclibrary.com/api/music')
      .then(response => setMusic(response.data));
  }

  useEffect(() => {
    getMusicData();
  }, [music]);



  return (
    <div className='container'>
      <div className="header">
        <NavigatorBar />
      </div>

      <div className="contents">

        <SearchBar searchBox={searchBox} searchFilter={searchFilter} handleSearchBoxChange={handleSearchBoxChange} handleSearchFilterChange={handleSearchFilterChange} handleSearchSubmit={handleSearchSubmit} />

        {music ? <MusicTable music={music} /> : <p>Loading...</p>}
        {/*music ? console.log(filterByAlbum('rubber')) : <p>Loading...</p>}
        {/*<Search />*/}
      </div>

      <div className="footer">
      </div>
    </div>
  )
}

export default App;
