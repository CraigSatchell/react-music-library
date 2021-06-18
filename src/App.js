/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import NavigatorBar from './components/NavigatorBar/navigatorBar'
import SearchBar from './components/SearchBar/searchBar'

// import Search from './components/simpleSearch/simpleSearch';

import './App.css'
import axios from 'axios'

const App = () => {
    const [music, setMusic] = useState([])
    const [searchBox, setSearchBox] = useState('')

  
    // Handle search submit
    const handleSearchSubmit = (event) => {
      event.preventDefault()
      setSearchBox('');
    }

    // Handle search change
    const handleSearchBoxChange = (event) => {
        setSearchBox(event.target.value)
    }

    const getMusicData = () => {
        axios
            .get('http://www.devcodecampmusiclibrary.com/api/music')
            .then((response) => setMusic(response.data))
    }

    useEffect(() => {
        getMusicData()
    }, [music])

    return (
        <div className='container'>
            <div className='header'>
                <NavigatorBar />
            </div>

            <div className='contents'>
                <SearchBar
                    music={music}
                    searchBox={searchBox}
                    handleSearchBoxChange={handleSearchBoxChange}
                    handleSearchSubmit={handleSearchSubmit}
                />
            </div>

            <div className='footer'></div>
        </div>
    )
}

export default App
