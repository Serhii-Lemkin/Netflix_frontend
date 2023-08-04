import { GET_FAIL } from '../pages/home/HomePageReducer';
import {
  ADD_TO_MY_LIST,
  REMOVE_FROM_MY_LIST,
} from './MyListActions';

const myListReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_MY_LIST:
      localStorage.setItem('myList', JSON.stringify(action.payload));
      return { myList: action.payload,  error: false };

    case REMOVE_FROM_MY_LIST:
      return { myList: action.payload,  error: false };

    case GET_FAIL:
      return { myList: null, error: false };

    default:
      return { ...state };
  }
};

export default myListReducer;
