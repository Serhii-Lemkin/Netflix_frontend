import { ArrowBackIosNewOutlinedIcon } from '../../Imports';
import './WatchPage.scss';

const WatchPage = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIosNewOutlinedIcon />
        home
      </div>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/b9EkMc79ZSU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
