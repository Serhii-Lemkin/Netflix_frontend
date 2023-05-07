import {
  useReducer,
  useContext,
  AuthContext,
  Featured,
  ListComponent,
  Navbar,
  React,
  axios,
  useEffect,
  useNavigate,
  Loading,
  ErrorComponent,
} from '../../Imports.js';
import './home.scss';
import {
  GET_FAIL,
  GET_REQUEST,
  GET_SUCCESS,
  homePageReducer,
  initialStateHomeReducer,
} from './HomePageReducer.js';

function HomePage({ type }) {
  const navigate = useNavigate();
  //const [lists, setLists] = useState([]);
  const { user } = useContext(AuthContext);

  const [{ loading, error, lists }, dispatch] = useReducer(
    homePageReducer,
    initialStateHomeReducer
  );

  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/');
    }
  }, [user, navigate]);

  useEffect(() => {
    const getRandomLists = async () => {
      dispatch({ type: GET_REQUEST });
      try {
        const results = await axios.get(
          `/lists/get${type ? '?type=' + type : ''}`,
          {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          }
        );
        dispatch({ type: GET_SUCCESS, payload: results.data });
      } catch (error) {
        dispatch({ type: GET_FAIL, payload: error.message });
      }
    };
    getRandomLists();
  }, [type]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} className="featured" />
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorComponent error={error}/>
      ) : (
        lists.map((list, i) => (
          <ListComponent className="list" list={list} key={i} />
        ))
      )}
    </div>
  );
}

export default HomePage;
