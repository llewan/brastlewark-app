import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = event => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchTerm('');
    props.onSearch(searchTerm);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search"
        value={searchTerm}
        className="search__input"
      />
    </form>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default Search;