import {
  ArrowBackIosNewOutlinedIcon,
  useEffect,
  useNavigate,
  useParams,
  useState,
  axios,
  ReactPlayer,
  Link,
  useContext,
  AuthContext,
} from '../../Imports';
import './WatchPage.scss';

const WatchPage = () => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getContent = async () => {
      try {
        const fetchedContent = await axios.get(`/content/get/${id}`, {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        });
        setContent(fetchedContent.data);
      } catch (error) {
        console.log(error);
      }
    };
    getContent();
  }, [id]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
  }, [navigate, user]);
  return (
    
    <div className="watch">
      <Link className="back" to="/">
        <ArrowBackIosNewOutlinedIcon />
        home
      </Link>
      <ReactPlayer
        controls={true}
        className="video"
        height="100%"
        width="100%"
        url={content ? content.movie : ''}
        playing={true}
      ></ReactPlayer>
    </div>
  );
};

export default WatchPage;
