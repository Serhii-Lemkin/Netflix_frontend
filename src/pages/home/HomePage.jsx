import {
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

  useEffect(() => {
    if (false) {
      navigate('/login');
      return;
    }
  });

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const results = await axios.get(
          `/lists/get${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              authorization: localStorage.getItem('authorization'),
            },
          }
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
      <Featured type={type} />
      {lists.map((list,i) => (
        <ListComponent list={list} key={i} />
      ))}
    </div>
  );
}

export default HomePage;
