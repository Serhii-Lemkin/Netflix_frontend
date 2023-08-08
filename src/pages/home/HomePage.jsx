import { ADD_TO_MY_LIST } from '../../auth/AuthAction.js';
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
  const { user, myList } = useContext(AuthContext);
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
    const getMyList = async () => {
      try {
        const results = await axios.get(`/lists/get?type=${user._id}`, {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        });
        var data = results.data[0];
        if (data) dispatch({ type: ADD_TO_MY_LIST, payload: data });
      } catch (err) {
        console.log(err);
      }
    };
    getMyList();
  }, [user]);

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
        dispatch({
          type: GET_SUCCESS,
          payload: results.data.sort(() => Math.random() - 0.5),
        });
      } catch (error) {
        dispatch({ type: GET_FAIL, payload: error.message });
      }
    };
    getRandomLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} className="featured" />
      {myList && myList.contents && myList.contents.length > 0 ? (
        <ListComponent className="list" list={myList} />
      ) : null}
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorComponent error={error} />
      ) : (
        lists.map((list, i) => (
          <ListComponent className="list" list={list} key={i} />
        ))
      )}
    </div>
  );
}

export default HomePage;

//
