import React, { Component } from 'react'
import NavigatorBar from './components/NavigatorBar/navigatorBar';
import SearchBar from './components/SearchBar/searchBar';
import MusicTable from './components/MusicTable/musicTable';
import './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      music: []
    };

    this.filterByAlbum = this.filterByAlbum.bind(this);
    this.filterByArtist = this.filterByArtist.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);

  }

     // TODO: Filter by album
     filterByAlbum() {

    }
 
 
    // TODO: Filter by genre
    filterByGenre() {
 
 
    }
 
    // TODO. Filter by artist
    filterByArtist() {
 
    }
 

  componentDidMount() {
    try {
      axios.get('http://www.devcodecampmusiclibrary.com/api/music')
      .then(response => this.setState({
        music: response.data
      }));
      console.log(this.state);
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
          <SearchBar />
          <MusicTable music={this.state.music} />
        </div>

        <div className="footer">
        </div>
      </div>
    )
  }
}
