import {
  ArrowBackIosNewOutlinedIcon,
  ArrowForwardIosOutlinedIcon,
  ListItem,
  useState,
  useRef,
  useEffect,
} from '../../Imports';
import './List.scss';

export const ListComponent = () => {
  const step = 220;
  const listRef = useRef();
  const [slidenumber, setSlideNumber] = useState(0);

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === 'left' && slidenumber > 0) {
      setSlideNumber(slidenumber - 1);

      listRef.current.style.transform = `translateX(${step + distance}px)`;
    }
    if (direction === 'right' && slidenumber < 5) {
      setSlideNumber(slidenumber + 1);
      listRef.current.style.transform = `translateX(${-step + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon
          style={{ display: slidenumber === 0 && 'none' }}
          className="sliderArrow left-arrow"
          onClick={() => handleClick('left')}
        />
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlinedIcon
          className="sliderArrow right-arrow"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};
