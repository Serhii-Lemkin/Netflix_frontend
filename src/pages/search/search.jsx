import {
  useNavigate,
  SearchIcon,
  useState,
  useContext,
  AuthContext,
  Navbar,
  useLocation,
  genres,
} from '../../Imports';
import './search.scss';

import React, { useEffect } from 'react';

function Search() {
  const navigate = useNavigate();
  const [searchText, setSearchtext] = useState('');
  const [searchGenre, setSearchgenre] = useState('');
  const [content, setContent] = useState([]);
  const { user } = useContext(AuthContext);


  const urlBuilderFunction = () => {
    let start = '';
    if (!searchText && !searchGenre) return '';
    if (searchText || searchGenre) start += '?';
    const queries = [];
    if (searchText) queries.push(`query=${searchText}`);
    if (searchGenre) queries.push(`genre=${searchGenre}`);

    if (queries.length > 0) start += queries.join('&');

    return start;
  };

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user]);

  const onGenreChange = (genre) => {
    console.log(genre);
    setSearchgenre(genre);
    onSearchStart();
  };
  const onSearchStart = async () => {
    var props = urlBuilderFunction();
    console.log(props);
    navigate(`/search/${props}`);
  };

  return (
    <>
      <div className="main">
        <Navbar className="nav" />

        <div className="search">
          <div className="options">
            <div className="searchGroup">
              <input
                type="text"
                className="searchInput"
                onChange={setSearchtext}
              />
              <button
                className="searchbutton"
                onClick={(e) => onSearchStart(e.target.value)}
              >
                <SearchIcon />
              </button>
            </div>
            <ul className="genres">
              <li onClick={() => onGenreChange('')}>Genre</li>
              {genres.map((genre, i) => (
                <li value={genre} key={i} onClick={() => onGenreChange(genre)}>
                  {genre}
                </li>
              ))}
            </ul>
          </div>
          <div className="results">
            <h3>Your results:</h3>
            <div className="results-items">
              {content.map((item) => (
                <div className="content"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
