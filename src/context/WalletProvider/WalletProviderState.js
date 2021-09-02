import React, {useReducer} from 'react';
import walletProviderContext from './WalletProviderContext';
import walletProviderReducer from './WalletProviderReducer';
import {
  SET_CONNECTED,
  SET_PROVIDER,
  REMOVE_PROVIDER,
  SET_ACCOUNT,
  REMOVE_ACCOUNT,
  SET_TOKEN_BALANCE,
  REMOVE_TOKEN_BALANCE
} from '../types';

const WalletProviderState = ({children}) => {
  const initialState = {
    connected: false,
    provider: null,
    account: '',
    token_balance: '0'
  };

  const [state, dispatch] = useReducer(walletProviderReducer, initialState);

  const setConnected = isConnected => {
    console.log(isConnected)
      dispatch({type: SET_CONNECTED, payload: isConnected});
      return isConnected;
  };

  const setWalletProvider = async provider => {
      dispatch({type: SET_PROVIDER, payload: provider});
      return provider;
  };

  const removeWalletProvider = () => {
      dispatch({type: REMOVE_PROVIDER, payload: null});
      return null;
  };

  const setAccount = account => {
    dispatch({type: SET_ACCOUNT, payload: account});
    return account;
  };

  const removeAccount = () => {
    dispatch({type: REMOVE_ACCOUNT, payload: ''});
    return '';
  };

  const setTokenBalance = balance => {
    dispatch({type: SET_TOKEN_BALANCE, payload: balance});
    return balance;
  };

  const removeTokenBalance = () => {
    dispatch({type: REMOVE_TOKEN_BALANCE, payload: ''});
    return '';
  };

  return (
    <walletProviderContext.Provider
    value={{
      setConnected,
      setWalletProvider,
      removeWalletProvider,
      setAccount,
      removeAccount,
      setTokenBalance,
      removeTokenBalance,
      connected: state.connected,
      providerContext: state.provider,
      account: state.account,
      tokenBalance: state.token_balance
    }}
    >
    {children}
    </walletProviderContext.Provider>
  );
};

export default WalletProviderState;
