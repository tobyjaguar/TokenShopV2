import {
  SET_TRANSACTIONS,
  REMOVE_TRANSACTIONS
} from '../types';

const TransactionsReducer = (state, action) =>{
  switch (action.type) {
    case SET_TRANSACTIONS:
      return [...state, action.payload];
    case REMOVE_TRANSACTIONS:
      return state;
    default:
      return state;
  };
};

export default TransactionsReducer;
