import React from 'react';
import MoviesListItem from '../movies-list-item';

import './movies-list.css';

const MoviesList = ({movies}) => {

    console.log(movies)

    const movieList = movies.map((item) => {

        return (
            <li>
                <MoviesListItem item ={item}/>
            </li>
        )
    })

    return (
        <ul>
            {movieList}
        </ul>
    )

};

export default MoviesList;