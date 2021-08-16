import React from 'react';

import './search-panel.css'

const SearchPanel = ({ onSubmit, setMovTitle, movTitle }) => {
    
    return (
        <form className='search-panel'
            onSubmit={onSubmit}>
            <input
                placeholder ='Search...'
                className='search-panel' 
                onChange = {(e) => setMovTitle(e.target.value)}
                value={movTitle}/>
            <p>Welcome to Cinema World</p>
        </form>
    )
}

export default SearchPanel;