import {
  SET_CONNECTED,
  SET_PROVIDER,
  REMOVE_PROVIDER,
  SET_ACCOUNT,
  REMOVE_ACCOUNT,
  SET_TOKEN_BALANCE,
  REMOVE_TOKEN_BALANCE
} from '../types';

const WalletProviderReducer = (state, action) =>{
  switch (action.type) {
    case SET_CONNECTED:
      return {
        ...state,
        connected: action.payload
      };
    case SET_PROVIDER:
      return {
        ...state,
        provider: action.payload
      };
    case REMOVE_PROVIDER:
      return {
        ...state,
        provider: action.payload,
        account: '',
        token_balance: '',
        connected: false
      };
    case SET_ACCOUNT:
      return {
        ...state,
        account: action.payload
      };
    case REMOVE_ACCOUNT:
      return {
        ...state,
        account: action.payload
      };
    case SET_TOKEN_BALANCE:
      return {
        ...state,
        token_balance: action.payload
      };
    case REMOVE_TOKEN_BALANCE:
      return {
        ...state,
        token_balance: action.payload
      };
    default:
      return state;
  };
};

export default WalletProviderReducer;
