import './Featured.scss';
import {
  useContext,
  InfoOutlinedIcon,
  PlayArrowIcon,
  useState,
  useEffect,
  axios,
  AuthContext,
} from '../../Imports';

export default function Featured({ type }) {
  const [randomContent, setRandomContent] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getRandomContent = async () => {
      console.log(type);

      try {
        let path = '/content/random';
        let pathtype = type ? `?type=${type}` : '';
        const responce = await axios.get(path + pathtype, {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        });
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
