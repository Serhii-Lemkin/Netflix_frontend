import { ListItem, SearchIcon } from '../../Imports';
import './search.scss';

import React from 'react';

function Search() {
  return (
    <div className="search">
      <div className="options">
        <div className="searchGroup">
          <input type="text" className="searchInput" />
          <button className="searchbutton">
            <SearchIcon />
          </button>
        </div>
        <ul className="genres">
          <li>Genre</li>
          <li value="adventure">Action</li>
          <li value="comedy">Comedy</li>
          <li value="fantasy">Fantasy</li>
          <li value="detective">Detective</li>
          <li value="horror">Horror</li>
          <li value="animation">Animation</li>
        </ul>
      </div>
      <div className="results">
        <div className="dummy"></div>
        <div className="dummy"></div>
        <div className="dummy"></div>
        <div className="dummy"></div>
        <div className="dummy"></div>
        <div className="dummy"></div>
        <div className="dummy"></div>
        <div className="dummy"></div>
        <div className="dummy"></div>
        <div className="dummy"></div>
        <div className="dummy"></div>
        <div className="dummy"></div>
        <div className="dummy"></div>
        <div className="dummy"></div>
        <div className="dummy"></div>
        <div className="dummy"></div>
      </div>
    </div>
  );
}

export default Search;
