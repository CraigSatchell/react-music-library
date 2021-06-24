/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import NavigatorBar from './components/NavigatorBar/navigatorBar'
import SearchBar from './components/SearchBar/searchBar'
import MusicTableDetails from './components/MusicTableDetails/musicTableDetails';
import {Switch, Route} from 'react-router-dom';


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

    // connect to localhost API backend on port 5000
    const getMusicData = () => {
        axios.get('http://localhost:5000/api/songs/').then((response) => setMusic(response.data))
    }

    useEffect(() => {
        getMusicData()
    }, [music])

    return (
        <div className='container'>
            <div className='header'>
                <NavigatorBar/>
            </div>

            <div className='contents'>


                <Switch>
                    <Route exact path="/">
                        <SearchBar music={music}
                            searchBox={searchBox}
                            handleSearchBoxChange={handleSearchBoxChange}
                            handleSearchSubmit={handleSearchSubmit}/></Route>
                    <Route path="/song-details"><MusicTableDetails/></Route>
                </Switch>
{/*
                <SearchBar music={music}
                    searchBox={searchBox}
                    handleSearchBoxChange={handleSearchBoxChange}
                        handleSearchSubmit={handleSearchSubmit} />
*/}
            </div>

            <div className='footer'></div>
        </div>
    )
}

export default App
