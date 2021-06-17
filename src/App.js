import React, { Component } from 'react';
import NavigatorBar from './components/NavigatorBar/navigatorBar';
import MusicTable from './components/MusicTable/musicTable';
import SearchBar from './components/SearchBar/searchBar';
import './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      music: [],
      searchBox: '',
      searchFilter: ''
    };

    this.filterMusic = null;

    this.filterByAlbum = this.filterByAlbum.bind(this);
    this.filterByArtist = this.filterByArtist.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.filterByTitle = this.filterByTitle.bind(this);
    this.filterByReleaseDate = this.filterByReleaseDate.bind(this);

    this.handlerSearchChange = this.handlerSearchChange.bind(this);
    this.handlerSearchSubmit = this.handlerSearchSubmit.bind(this);

  }



  // Filter by album
  filterByAlbum(searchFor) {
    let matchedSongs = this.state.music.filter((song) => { return song.album.toLowerCase().includes(searchFor) });
    return matchedSongs;
  }


  // Filter by genre
  filterByGenre(searchFor) {
    let matchedSongs = this.state.music.filter((song) => { return song.genre.toLowerCase().includes(searchFor) });
    return matchedSongs;
  }

  // Filter by artist
  filterByArtist(searchFor) {
    let matchedSongs = this.state.music.filter((song) => { return song.artist.toLowerCase().includes(searchFor) });
    return matchedSongs;

  }

  // Filter by artist
  filterByTitle(searchFor) {
    let matchedSongs = this.state.music.filter((song) => { return song.title.toLowerCase().includes(searchFor) });
    return matchedSongs;

  }


  // Filter by release date
  filterByReleaseDate(searchFor) {
    let matchedSongs = this.state.music.filter((song) => { return song.releaseDate.toLowerCase().includes(searchFor) });
    return matchedSongs;

  }


  // Handle search submit
  handlerSearchSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  // Handle search change
  handlerSearchChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  

  componentDidMount() {
    try {
      axios.get('http://www.devcodecampmusiclibrary.com/api/music')
        .then(response => this.setState({
          music: response.data
        }));
    } catch (e) {
      console.log(e);
    }
  }

  render() {

    return (
      <div className='container'>
        <div className="header">
          <NavigatorBar />
        </div>

        <div className="contents">
          <SearchBar searchBox={this.state.searchBox} searchFilter={this.state.searchFilter} handlerSearchChange={this.handlerSearchChange} handlerSearchSubmt={this.handlerSearchSubmit} />
          {this.state.music ? <MusicTable music={this.state.music} /> : <p>Loading...</p>}
          {/*this.state.music ? console.log(this.filterByAlbum('rubber')) : <p>Loading...</p>*/}
        </div>

        <div className="footer">
        </div>
      </div>
    )
  }
}
