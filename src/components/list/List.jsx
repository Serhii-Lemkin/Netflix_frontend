import {
  ArrowBackIosNewOutlinedIcon,
  ArrowForwardIosOutlinedIcon,
  ListItem,
  useState,
  useRef,
} from '../../Imports';
import Carousel from 'react-multi-carousel';
import './List.scss';
import 'react-multi-carousel/lib/styles.css';
import { ButtonGroup } from '@mui/material';

export const ListComponent = ({ list }) => {
  const step = 220;
  const listRef = useRef();
  const [slidenumber, setSlideNumber] = useState(0);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: Math.floor(window.innerWidth / 225) - 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: Math.floor(window.innerWidth / 225) - 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: Math.floor(window.innerWidth / 225) - 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: Math.floor(window.innerWidth / 225) - 1,
    },
  };

  // const handleClick = (direction) => {
  //   let distance = listRef.current.getBoundingClientRect().x - 50;
  //   if (direction === 'left' && slidenumber > 0) {
  //     setSlideNumber(slidenumber - 1);

  //     listRef.current.style.transform = `translateX(${step + distance}px)`;
  //   }
  //   if (direction === 'right' && slidenumber < 5) {
  //     setSlideNumber(slidenumber + 1);
  //     listRef.current.style.transform = `translateX(${-step + distance}px)`;
  //   }
  // };

  return (
    <div className="list">
      <span className="listTitle link">{list.title}</span>

      <Carousel
        className="carousel"
        responsive={responsive}
        swipeable={true}
        infinite={true}
        draggable={true}
       centerMode={true}
      >
        {list.contents.map((item, i) => (
          <ListItem
            className="item"
            key={i}
            item={item}
          />
        ))}
      </Carousel>

      {/* <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon
          style={{ display: slidenumber === 0 && 'none' }}
          className="sliderArrow left-arrow"
          onClick={() => handleClick('left')}
        />
        <div className="container" ref={listRef}>{
          list.contents.map((item, i)=>(
            <ListItem key={i} item={item}/>
          ))
        }
          
        </div>
        <ArrowForwardIosOutlinedIcon
          className="sliderArrow right-arrow"
          onClick={() => handleClick('right')}
        />
      </div> */}
    </div>
  );
};
