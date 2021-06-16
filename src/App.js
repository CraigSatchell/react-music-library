import React, { Component } from 'react'
import NavigatorBar from './components/NavigatorBar/navigatorBar';
import SearchBar from './components/SearchBar/searchBar';
import MusicTable from './components/MusicTable/musicTable';
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = null;
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='container'>
        <div className="header">
          <NavigatorBar />
        </div>

        <div className="contents">
          <SearchBar />
          <MusicTable />
        </div>

        <div className="footer">
        </div>
      </div>
    )
  }
}
