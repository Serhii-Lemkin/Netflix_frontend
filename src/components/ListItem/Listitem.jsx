import { useContext } from 'react';
import {
  AddIcon,
  PlayArrowIcon,
  ThumbDownOffAltOutlinedIcon,
  ThumbUpOutlinedIcon,
  useState,
  ReactPlayer,
  Link,
  AuthContext,
  axios,
} from '../../Imports';
import RemoveIcon from '@mui/icons-material/Remove';
import './ListItem.scss';
import { MyListContext } from '../../myList/MyListContext';
import { ADD_TO_MY_LIST } from '../../myList/MyListActions';

const ListItem = ({ index, item }) => {
  const { myList, dispatch } = useContext(MyListContext);

  const [isHovered, setIsHovered] = useState(false);
  const { user } = useContext(AuthContext);

  const addToMyListHandler = async () => {
    try {
      const results = await axios.get(`/lists/savetomylist/${item._id}`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });
      dispatch({ type: ADD_TO_MY_LIST, payload: results.data });
      console.log(results.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const RemoveFromMyListHandler = async () => {
    try {
      const results = await axios.get(`/lists/removefrommylist/${item._id}`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });
      console.log(results.data);
      dispatch({ type: ADD_TO_MY_LIST, payload: results.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div
        className="listItem"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="contents">
          <Link to={{ pathname: `/details/${item._id}` }} className="link">
            <img src={item?.imgThumb} alt="" className='img-in-link'/>
          </Link>
          {isHovered && (
            <>
              <Link to={{ pathname: `/details/${item._id}` }} className="link">
                <ReactPlayer
                  className="video"
                  height={145}
                  width={300}
                  url={item.trailer}
                  playing={true}
                ></ReactPlayer>
              </Link>
              <div className="itemInfo">
                <div className="icons">
                  <PlayArrowIcon className="icon link" />

                  <AddIcon
                    className="icon"
                    onClick={() => {
                      addToMyListHandler();
                    }}
                  />
                  {myList && myList.contents.find((x) => x._id === item._id) ? (
                    <RemoveIcon
                      className="icon"
                      onClick={() => {
                        RemoveFromMyListHandler();
                      }}
                    />
                  ) : null}

                  <ThumbUpOutlinedIcon className="icon" />
                  <ThumbDownOffAltOutlinedIcon className="icon" />
                </div>
                <Link
                  to={{ pathname: `/details/${item._id}` }}
                  className="link"
                >
                  <div className="itemInfoTop">
                    <span>{item.duration}</span>
                    <span className="limit">+{item.limit}</span>
                    <span>{item.year}</span>
                  </div>
                  <div className="desc">{item.desc}</div>
                  <div className="genre">{item.genre}</div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ListItem;
