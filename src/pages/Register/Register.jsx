import {
  useState,
  useRef,
  useEffect,
  registerCall,
  useContext,
  useNavigate,
  AuthContext,
  MarkEmailReadIcon,
  CheckCircleIcon,
  VisibilityIcon,
  VisibilityOffIcon,
  BackspaceIcon,
} from '../../Imports';
import './Register.scss';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  var [passwordVisible, setPasswordvisible] = useState('password');
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const { isFetching, dispatch, user } = useContext(AuthContext);

  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    const username = email.substring(0, email.indexOf('@'));
    try {
      await registerCall({ email, password, username }, dispatch);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              <MarkEmailReadIcon />
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type={passwordVisible}
              placeholder="password"
              ref={passwordRef}
            />
            <VisibilityOffIcon
              className={
                passwordVisible === 'password' ? 'icon' : 'icon-hidden'
              }
              onClick={() => setPasswordvisible('text')}
            />
            <VisibilityIcon
              className={passwordVisible === 'text' ? 'icon' : 'icon-hidden'}
              onClick={() => setPasswordvisible('password')}
            />
            <button
              className="registerButton"
              onClick={handleFinish}
              disabled={isFetching}
            >
              <CheckCircleIcon />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
