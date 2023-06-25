import {
  AuthContext,
  Navbar,
  PlayArrowIcon,
  axios,
  useNavigate,
  useParams,
} from '../../Imports';
import './DetailsPage.scss';

import React, { useContext, useEffect, useState } from 'react';

function DetailsPage() {
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
  }, [id, user.token]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
  }, [navigate, user]);
  return (
    <div className="main">
      <Navbar />
      <div className="centered">
        <div className="details">
          <img
            className="picture"
            src={content ? content.imgVertical : ''}
            alt="img"
          />
          <div className="info">
            <h1>{content ? content.title : ''}</h1>
            <p>{content ? content.description : ''}</p>
            <p>
              Type: {content ? (content.isSeries ? 'Series' : 'Movie') : ''}
            </p>
            <p>Year: {content ? content.year : ''}</p>
            <p>Duration: {content ? content.duration : ''}</p>
            <p>Age restriction: {content ? content.limit : ''}+</p>
            <p>Genre: {content ? content.genre : ''}</p>
            <div className="buttons">
              <button
                className="play"
                onClick={() => navigate(`/watch/${content ? content._id : ''}`)}
              >
                <PlayArrowIcon />
                <span>Play</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
