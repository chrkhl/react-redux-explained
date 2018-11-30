import React from 'react';

const SearchBar = ({ searchTerm, onSearchTermChange }) => {

  const handleChange = event => {
    onSearchTermChange(event.target.value);
  }

  return (
    <fieldset>
      <div className='searchbar'>
        <label htmlFor="searchTerm">Suche:</label>
        <input type="text" id="searchTerm" value={ searchTerm } onChange={ handleChange } placeholder="hier bitte Suchbegriff eingeben" />
      </div>
    </fieldset>
  );
}

export default SearchBar;