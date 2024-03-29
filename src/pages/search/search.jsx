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
  CloseIcon,
  Link,
} from '../../Imports';
import './search.scss';

import React, { useEffect } from 'react';

function Search() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const queryParam = searchParams.get('query') || '';
  const genreParam = searchParams.get('genre') || '';
  const [searchText, setSearchtext] = useState(queryParam);
  const [content, setContent] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setSearchtext(queryParam);

    const getResult = async () => {
      try {
        const result = await axios.get(
          'content/search' +
            `${genreParam || queryParam ? '?' : ''}${
              genreParam ? `genre=${genreParam}` : ''
            }${genreParam && queryParam ? '&' : ''}${
              queryParam ? `query=${queryParam}` : ''
            }`,
          {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          }
        );
        setContent(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getResult();
  }, [queryParam, genreParam]);

  useEffect(() => {
    onSearchStart();
  }, [searchText]);

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user]);

  const onSearchStart = async () => {
    navigate(
      `${genreParam || searchText ? '?' : ''}${
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
                type="text"
                className="searchInput"
                value={queryParam}
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
            <h3 className="resultText">
              Your results: {queryParam ? `input: ${queryParam}, ` : ' '}{' '}
              {genreParam ? `genre: ${genreParam}` : ''}{' '}
              {queryParam || genreParam ? (
                <CloseIcon
                  className="clearbutton"
                  onClick={() => {
                    navigate('/search');
                  }}
                />
              ) : (
                ''
              )}{' '}
            </h3>
            <div className="results-items">
              <div className="movies">
                <h2>Movies</h2>
                <div className="moviesRes">
                  {content.map(
                    (item, i) =>
                      item.isSeries === false && (
                        <Link
                          to={{ pathname: `/details/${item._id}` }}
                          className="link"
                        >
                          <img
                            src={item.imgThumb}
                            alt={item.title}
                            key={i}
                            className="content"
                          />
                        </Link>
                      )
                  )}
                </div>
              </div>
              <div className="series">
                <h2>Series</h2>
                <div className="moviesRes">
                  {content.map(
                    (item, i) =>
                      item.isSeries && (
                        <Link
                          to={{ pathname: `/details/${item._id}` }}
                          className="link"
                        >
                          <img
                            src={item.imgThumb}
                            alt={item.title}
                            key={i}
                            className="content"
                          />
                        </Link>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
