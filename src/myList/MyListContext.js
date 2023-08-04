import { createContext, useEffect, useReducer } from 'react';
import myListReducer from './MyListReducer.js';

const INITIAL_STATE = {
  myList:
    localStorage.getItem('myList') !== null
      ? JSON.parse(localStorage.getItem('myList'))
      : null,
  error: false,
};

export const MyListContext = createContext(INITIAL_STATE);

export const MyListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(myListReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem('myList', JSON.stringify(state.myList));
  }, [state.myList]);

  return (
    <MyListContext.Provider
      value={{
        myList: state.myList,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MyListContext.Provider>
  );
};
