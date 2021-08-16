import React from 'react';

import './movies-list-item.css'

const MoviesListItem = ({item}) => {
    console.log(item)
    return (
        <div>
            <p>{item}</p>
        </div>
    )
}

export default MoviesListItem;