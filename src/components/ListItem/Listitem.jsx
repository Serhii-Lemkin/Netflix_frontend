import {
  AddIcon,
  PlayArrowIcon,
  ThumbDownOffAltOutlinedIcon,
  ThumbUpOutlinedIcon,
  useState,
} from '../../Imports';
import './ListItem.scss';

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';
  return (
    <div
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      className="listItem"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png"
        alt="img"
      />
      {isHovered && (
        <>
          <div>
            <iframe
              className="video"
              src="https://www.youtube.com/embed/b9EkMc79ZSU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOffAltOutlinedIcon className="icon" />
            </div>
            <div className="item-info-top">
              <span>1 hour 14 min</span>
              <span className="limit">+16</span>
              <span>1997</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              alias quae pariatur officia eaque aliquid?{' '}
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
