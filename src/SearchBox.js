import React from 'react';

const SearchBox = ({ searchField, SearchChange }) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots'
            value={searchField}
            onChange={SearchChange}
            />
        </div>
    );
}

export default SearchBox;