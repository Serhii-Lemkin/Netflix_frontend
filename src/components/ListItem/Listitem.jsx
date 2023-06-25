import {
  AddIcon,
  PlayArrowIcon,
  ThumbDownOffAltOutlinedIcon,
  ThumbUpOutlinedIcon,
  useState,
  ReactPlayer,
  Link,
} from '../../Imports';
import './ListItem.scss';

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={{ pathname: `/details/${item._id}` }} className="link">
      <div
        className="listItem"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={item?.imgThumb} alt="" />
        {isHovered && (
          <>
            <ReactPlayer
              className="video"
              height={145}
              width={300}
              url={item.trailer}
              playing={true}
            ></ReactPlayer>
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon link" />
                <AddIcon className="icon" />
                <ThumbUpOutlinedIcon className="icon" />
                <ThumbDownOffAltOutlinedIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{item.duration}</span>
                <span className="limit">+{item.limit}</span>
                <span>{item.year}</span>
              </div>
              <div className="desc">{item.desc}</div>
              <div className="genre">{item.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
