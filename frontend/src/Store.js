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
      const newItem = action.payload;
      const existItem = state.bookings.bookedItems.find(
        (item) => item._id === newItem._id
      );
      const bookedItems = existItem
        ? state.bookings.bookedItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.bookings.bookedItems, newItem];
      return { ...state, bookings: { ...state.bookings, bookedItems } };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
