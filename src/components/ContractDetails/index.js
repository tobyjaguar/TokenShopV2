import React from 'react'

const ContractDetails = ({
  address,
  name,
  symbol,
  total,
}) => {

  return(
    <React.Fragment>
    <p>Token Address: {address}</p>
    <p>Token Name: {name}</p>
    <p>Token Symbol: {symbol}</p>
    <p>Total: {total}</p>
    </React.Fragment>
  )
}

export default ContractDetails
