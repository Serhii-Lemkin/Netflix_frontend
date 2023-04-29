import React from 'react';
import './Featured.scss';
import {
  InfoOutlinedIcon,
  PlayArrowIcon,
  useState,
  useEffect,
  axios,
  headers,
} from '../../Imports';

export default function Featured({ type }) {
  const [randomContent, setRandomContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      console.log(type);

      try {
        let path = '/content/random';
        let pathtype = type ? `?type=${type}` : '';
        const responce = await axios.get(path + pathtype, headers);
        if (responce) setRandomContent(responce.data);
        console.log('data');
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={randomContent.img} alt={randomContent.title} />
      <div className="info">
        <img src={randomContent.imgTitle} alt={randomContent.title} />
        <span className="desc">{randomContent.description}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
