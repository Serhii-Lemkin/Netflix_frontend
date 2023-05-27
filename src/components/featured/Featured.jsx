import './Featured.scss';
import {
  useContext,
  InfoOutlinedIcon,
  PlayArrowIcon,
  useState,
  useEffect,
  axios,
  AuthContext,
  useNavigate,
} from '../../Imports';

export default function Featured({ type }) {
  const [randomContent, setRandomContent] = useState({});
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        let path = '/content/random';
        let pathtype = type ? `?type=${type}` : '';
        const responce = await axios.get(path + pathtype, {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        });
        if (responce) setRandomContent(responce.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
    const interval = setInterval(() => {
      getRandomContent();
    }, 4000);
    return () => clearInterval(interval);
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
          <button
            className="play"
            onClick={() => navigate(`/watch/${randomContent._id}`)}
          >
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button
            className="more"
            onClick={() => navigate(`/details/${randomContent._id}`)}
          >
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
