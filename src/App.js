import React, { Component } from 'react'
import NavigatorBar from './components/NavigatorBar/navigatorBar';
import MusicTable from './components/MusicTable/musicTable';
import './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      music: [],
      searchBar: ''
    };

    this.filterMusic = null;

    this.filterByAlbum = this.filterByAlbum.bind(this);
    this.filterByArtist = this.filterByArtist.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);

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
  handleSearchSubmit(event) {
    event.preventDefault();

  }

  // Handle search change
  handleSearchChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSearchFilter(event) {

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
    this.filterByAlbum('rubber');
  }

  render() {

    return (
      <div className='container'>
        <div className="header">
          <NavigatorBar />
        </div>

        <div className="contents">
          {this.state.music ? <MusicTable music={this.state.music} filterArtist={this.filterByArtist} filterAlbum={this.filterByAlbum} filterGenre={this.filterByGenre} filterTitle={this.filterByTitle} filterReleaseDate={this.filterByReleaseDate} handleSearchFilter={this.handleSearchFilter} handleSearchSubmit={this.handleSearchSubmit} handleSearchChange={this.handleSearchChange} /> : <p>Loading...</p>}
          {/*this.state.music ? console.log(this.filterByAlbum('rubber')) : <p>Loading...</p>*/}
        </div>

        <div className="footer">
        </div>
      </div>
    )
  }
}
