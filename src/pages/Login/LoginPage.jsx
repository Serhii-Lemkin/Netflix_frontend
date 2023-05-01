import './LoginPage.scss';
import {
  AuthContext,
  Link,
  useEffect,
  useContext,
  useState,
  loginCall,
  useNavigate,
  useLocation,
} from '../../Imports';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  const { isFetching, dispatch, user } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginCall({ email, password }, dispatch);
      navigate(redirect || '/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [navigate, redirect, user]);

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="loginButton"
            onClick={handleLogin}
            disabled={isFetching}
          >
            Sign In
          </button>
          <span>
            New to Netflix?{' '}
            <Link className="link link-signin" to="/register">
              Sign up now.
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </small>
        </form>
      </div>
    </div>
  );
}
