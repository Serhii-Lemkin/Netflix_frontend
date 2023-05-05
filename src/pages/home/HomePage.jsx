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
          `/lists/get${type ? '?type=' + type : ''}`,
          {headers: {
    authorization: `Bearer ${user.token}`  ,
  },}
        );
        setLists(results.data.sort(() => Math.random() - 0.5));
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} className='featured'/>
      {lists.map((list, i) => (
        <ListComponent className="list" list={list} key={i} />
      ))}
    </div>
  );
}

export default HomePage;
