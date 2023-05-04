import {
  useNavigate,
  SearchIcon,
  useState,
  useContext,
  AuthContext,
  Navbar,
  useLocation,
  axios,
  genres,
} from '../../Imports';
import './search.scss';

import React, { useEffect } from 'react';

function Search() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const [searchText, setSearchtext] = useState('');
  const queryParam = searchParams.get('query') || '';
  const genreParam = searchParams.get('genre') || '';
  const [content, setContent] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setSearchtext(queryParam);
    const getResult = async () => {
      try {
        const result = await axios.get(
          'content/search' +
            `${searchParams || searchText ? '?' : ''}${
              genreParam ? `genre=${genreParam}` : ''
            }${genreParam && searchText ? '&' : ''}${
              searchText ? `query=${searchText}` : ''
            }`,
          {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
    getResult();
  }, [queryParam, genreParam]);

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user]);

  const onSearchStart = async () => {
    navigate(
      `${searchParams || searchText ? '?' : ''}${
        genreParam ? `genre=${genreParam}` : ''
      }${genreParam && searchText ? '&' : ''}${
        searchText ? `query=${searchText}` : ''
      }`
    );
  };

  return (
    <>
      <div className="main">
        <Navbar className="nav" />

        <div className="search">
          <div className="options">
            <div className="searchGroup">
              <input
                text={queryParam}
                type="text"
                className="searchInput"
                onChange={(e) => setSearchtext(e.target.value)}
              />
              <button className="searchbutton" onClick={() => onSearchStart()}>
                <SearchIcon />
              </button>
            </div>
            <ul className="genres">
              <li
                onClick={() =>
                  navigate(searchText ? `?query=${searchText}` : '')
                }
              >
                Genre
              </li>
              {genres.map((genre, i) => (
                <li
                  value={genre}
                  key={i}
                  onClick={() =>
                    navigate(
                      searchText
                        ? `?genre=${genre}&query=${searchText}`
                        : `?genre=${genre}`
                    )
                  }
                >
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
