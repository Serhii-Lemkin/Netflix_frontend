import './App.scss';
import {
  HomePage,
  WatchPage,
  Register,
  LoginPage,
  BrowserRouter,
  Routes,
  Route,
  Search,
} from './Imports';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* auth */}
          <Route exact path="/" element={<HomePage />} />
          {/* auth */}
          <Route path="/movies" element={<HomePage type="movies" />} />
          {/* auth */}
          <Route path="/series" element={<HomePage type="series" />} />
          {/* auth */}
          <Route path="/watch/:id" element={<WatchPage />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
