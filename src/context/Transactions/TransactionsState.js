import React, {useReducer} from 'react';
import transactionsContext from './TransactionsContext';
import transactionsReducer from './TransactionsReducer';
import {
  SET_TRANSACTIONS,
  REMOVE_TRANSACTIONS
} from '../types';

const TransactionsState = ({children}) => {
  const initialState = {
    txs: []
  };

  const [state, dispatch] = useReducer(transactionsReducer, initialState);

  const setTransactions = async tx => {
      dispatch({type: SET_TRANSACTIONS, payload: tx});
      return tx;
  };

  const removeTransactions = () => {
      dispatch({type: REMOVE_TRANSACTIONS});
      return {};
  };

  return (
    <transactionsContext.Provider
    value={{
      setTransactions,
      removeTransactions,
      txsContext: state.txs
    }}
    >
    {children}
    </transactionsContext.Provider>
  );
};

export default TransactionsState;
