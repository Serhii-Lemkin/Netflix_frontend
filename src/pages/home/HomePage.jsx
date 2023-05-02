import {
  useContext,
  AuthContext,
  Featured,
  ListComponent,
  Navbar,
  React,
  axios,
  useEffect,
  useNavigate,
  useState,
} from '../../Imports.js';
import './home.scss';

function HomePage({ type }) {
  const navigate = useNavigate();
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const { user } = useContext(AuthContext);
  

  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/');
    }
  }, [user, navigate]);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const results = await axios.get(
          `/lists/get${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {headers: {
    authorization: `Bearer ${user.token}`  ,
  },}
        );
        setLists(results.data);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} className='featured'/>
      {lists.map((list, i) => (
        <ListComponent list={list} key={i} />
      ))}
    </div>
  );
}

export default HomePage;
