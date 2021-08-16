import React, {useState, useEffect} from 'react';
import MovieapiService from '../../services/cinemaapiService';
import Header from '../header';
import MoviesList from '../movies-list';
import SearchPanel from '../search-panel';
import ImageSlider from '../slider/ImageSlider';
import { SliderData } from '../slider/SliderData';

import './app.css'

const movieApi = new MovieapiService();



const App = () => {
    const [movies, setMovies] = useState([]);
    const [movTitle, setMovTitle] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        movieApi.getPopularMovies()
            .then((body) =>
            setMovies(body));
    }

    return (
        <div className='app'>
            <header className='main'>
                <Header />
            </header>
            <main>
                    <SearchPanel
                    onSubmit={onSubmit}
                    movTitle={movTitle}
                    setMovTitle={setMovTitle}/>
                <ImageSlider  slides={SliderData}/>
                <MoviesList movies={movies}/>
            </main>
        </div>
        
    )

}

export default App

