import React from 'react';

import './search-box.styles.css';

export const Search = ({ placeholder, handleChange }) => (
  <input 
    className='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);