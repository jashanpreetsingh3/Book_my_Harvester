import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  bookings: {
    bookedItems: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'BOOKING_ADDED':
      // add booking
      return {
        ...state,
        bookings: {
          ...state.bookings,
          bookedItems: [...state.bookings.bookedItems, action.payload],
        },
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
