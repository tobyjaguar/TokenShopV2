import React, {useReducer} from 'react'
import contractsContext from './ContractsContext'
import contractsReducer from './ContractsReducer'
import {
  SET_CONTRACTS,
  REMOVE_CONTRACTS
} from '../types'

import SHOP_ABI from '../../contracts/abi/TokenShop.json'
import TOBY_ABI from '../../contracts/abi/ERC20TobyToken.json'
import TRUFFLE_ABI from '../../contracts/abi/TruffleToken.json'

const SHOP_ADDRESS = process.env.REACT_APP_TOKEN_SHOP_CONTRACT_ADDRESS
const TOBY_ADDRESS = process.env.REACT_APP_TOBY_TOKEN_CONTRACT_ADDRESS
const TRUFFLE_ADDRESS = process.env.REACT_APP_TRFL_TOKEN_CONTRACT_ADDRESS

const ContractsState = ({children}) => {
  const initialState = {
    contracts: {
      tokenShop: '',
      tobyToken: '',
      truffleToken: ''
    }
  };

  const [state, dispatch] = useReducer(contractsReducer, initialState);

  const setContracts = async tx => {
      dispatch({type: SET_TRANSACTIONS, payload: tx});
      return tx;
  };

  const removeContracts = () => {
      dispatch({type: REMOVE_TRANSACTIONS});
      return {};
  };

  return (
    <contractsContext.Provider
    value={{
      setContracts,
      removeContracts,
      contractsContext: state.contracts
    }}
    >
    {children}
    </contractsContext.Provider>
  );
};

export default ContractsState;
