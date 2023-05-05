import {
  ListItem,
  // ArrowBackIosNewOutlinedIcon,
  // ArrowForwardIosOutlinedIcon,
  // useState,
  // useRef,
} from '../../Imports';
import Carousel from 'react-multi-carousel';
import './List.scss';
import 'react-multi-carousel/lib/styles.css';

export const ListComponent = ({ list }) => {
  // const step = 220;
  // const listRef = useRef();
  // const [slidenumber, setSlideNumber] = useState(0);

  const responsive = {
    superLargeDesktop5: {
      breakpoint: { max: 4000, min: 2100 },
      items: 8,
    },
    superLargeDesktop4: {
      breakpoint: { max: 2100, min: 1875 },
      items: 7,
    },
    superLargeDesktop3: {
      breakpoint: { max: 1875, min: 1650 },
      items: 6,
    },
    superLargeDesktop2: {
      breakpoint: { max: 1650, min: 1425 },
      items: 5,
    },
    superLargeDesktop: {
      breakpoint: { max: 1425, min: 1200 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 900 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 676 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 676, min: 0 },
      items: 1,
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
      <span className="listTitle">{list.title}</span>

      <Carousel
        className="carousel"
        responsive={responsive}
        infinite={true}
        centerMode={true}
        swipeable={false}
        draggable={false}
      >
        {list.contents.map((item, i) => (
          <ListItem className="item" key={i} item={item} />
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
