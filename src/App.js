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
    const [newSong, setNewSong] = useState({
        title: '',
        album: '',
        artist: '',
        genre: '',
        releaseDate: ''
    })


    // Handle search submit
    const handleSearchSubmit = (event) => {
        event.preventDefault()
        setSearchBox('');
    }

    // Handle search change
    const handleSearchBoxChange = (event) => {
        setSearchBox(event.target.value)
    }

    const handleDeleteSong = (id) => {
        // alert(id);
        // const newMusic = music.filter(song => song.id !== id);
        // setMusic(newMusic);
        deleteMusicData(id);
    }


    const handleAddSongSubmit = (event) => {
        event.preventDefault();
        alert('Add Song');
    }

    const handleSongChange = (event) => {
        setNewSong({
            ...newSong,
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    // connect to localhost API backend on port 5000
    const getMusicData = () => {
        axios.get('http://localhost:5000/api/songs/').then((response) => setMusic(response.data))
    }

    const deleteMusicData = (id) => {
        axios.delete(`http://localhost:5000/api/songs/${id}`).then((response) => (response.data));
        getMusicData();
    }

    useEffect(() => {
        getMusicData()
    }, [])

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
                            handleSearchSubmit={handleSearchSubmit}
                            handleDeleteSong={handleDeleteSong}
                            newSong={newSong}
                            handleAddSongSubmit={handleAddSongSubmit}
                            handleSongChange={handleSongChange}/></Route>
                    <Route path="/song-details"><MusicTableDetails/></Route>
                </Switch>
                {/*
                <SearchBar music={music}
                    searchBox={searchBox}
                    handleSearchBoxChange={handleSearchBoxChange}
                        handleSearchSubmit={handleSearchSubmit} />
*/} </div>

            <div className='footer'></div>
        </div>
    )
}

export default App
