import { Featured, ListComponent, Navbar, React } from '../../Imports.js';
import './home.scss';

function HomePage() {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
      <ListComponent />
      <ListComponent />
      <ListComponent />
      <ListComponent />
    </div>
  );
}

export default HomePage;
