import {
  SET_CONTRACTS,
  REMOVE_CONTRACTS
} from '../types';

const ContractsReducer = (state, action) =>{
  switch (action.type) {
    case SET_CONTRACTS:
      return [...state, action.payload];
    case REMOVE_CONTRACTS:
      return state;
    default:
      return state;
  };
};

export default ContractsReducer;
