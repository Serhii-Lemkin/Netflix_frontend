import React from 'react';

import './navbar.scss';
import {
  ArrowDropDownIcon,
  NotificationsIcon,
  SearchIcon,
} from '../../Imports';

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Netflix"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon />
          <span>KID</span>
          <NotificationsIcon />
          <img
            src="https://avatars.githubusercontent.com/u/110841049?v=4"
            alt=""
          />
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
