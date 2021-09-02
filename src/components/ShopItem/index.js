import React, { useContext, useEffect, useState } from 'react'

import web3 from 'web3'

//components
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Dialog from '@material-ui/core/Dialog'

import {groomWei} from '../../utils/groomBalance'

import walletContext from '../../context/WalletProvider/WalletProviderContext'
import contractsContext from '../../context/Contracts/ContractsContext'

const TRFL_NAME = process.env.REACT_APP_TRFL_TOKEN_NAME

//inline styles
const styles = {
    backgroundColor: '#F9DBDB',
    padding: 20

}

const dialogStyles = {
  style: {
    backgroundColor: '#F9DBDB',
    padding: 20
  }
}

const ShopItem = () => {
  const [dialogOpen, setDialog] = useState(false)
  const [account, setAccount] = useState('')
  const [decimals, setDecimals] = useState('18')
  const [shopStock, setStock] = useState('0')
  const [weiAmount, setWeiAmount] = useState('0')
  const [buyAmount, setButAmount] = useState('0')
  const [alertText, setText] = useState('')
  const [selectedToken, setSelectedToken] = useState('')

  const {
    connectedContext,
    providerContext,
    accountContext,
    tokenBalanceContext
  } = useContext(walletContext);

  const {
    contracts
  } = useContext(contractsContext);

  useEffect(async () => {
    // initial load
    if (connectedContext) {
      let localAccount = accountContext
      setDecimals(await contracts.tokenShop.methods.getTokenDecimals().call({from: localAccount}))
      setShopStock(await contracts.tokenShop.methods.getShopStock().call({from: localAccount}))
      setAccount(localAccount)
      setSelectedToken(TRFL_NAME)
    }
  }, [])

  const handleDialogOpen = () => {
    this.setState({ dialogOpen: true })
  }

  const handleDialogClose = () => {
    this.setState({ dialogOpen: false })
  }

  const handleInputChange = (event) => {
    if (event.target.value.match(/^[0-9.]{1,5}$/)){
      if (0 <= event.target.value && event.target.value <= 100) {
        var amount = Math.abs(parseFloat(event.target.value).toFixed(2))
        this.setState({ [event.target.name]: amount })
        this.setTXParamValue(amount)
      } else {
          this.setState({ [event.target.name]: '' })
          this.setTXParamValue(0)
        }
    } else {
        this.setState({ [event.target.name]: '' })
        this.setTXParamValue(0)
      }

  }

  const handleBuyButton = () => {
    let zero = web3.utils.toBN(0)
    let amountBN = web3.utils.toBN(buyAmount)
    if (amountBN.gt(zero)) {
      contracts.tokenShop.methods.buyToken(selectedToken,buyAmount).send({from: account})
    } else {
      setText("Oops! Check purchase amount.")
      handleDialogOpen()
    }
  }

  var shopStockGroomed = groomWei(shopStock)
  var sendAmountGroomed = groomWei(weiAmount)

  return (
    <div>
      <Paper style={styles} elevation={5}>
        <p><strong>Name: </strong> {contracts.tokenShop.methods.getTokenName().call({from: accounts[0]})}</p>

        <p><strong>Symbol: </strong> <ContractData contract="ERC20TokenShop" method="getTokenSymbol" /></p>
        <p><strong>Store Stock: </strong> {shopStockGroomed}</p>

        <h3><p>Buy Tokens: </p></h3>
        <p>Number of Tokens:</p>
        <form className="pure-form pure-form-stacked">
          <input name="purchaseAmount" type="number" placeholder="tokens" value={buyAmount} onChange={handleInputChange} />
          <Button type="Button" variant="contained" onClick={handleBuyButton}>Buy</Button>
        </form>
        <p>The oracle charges {oracleTaxGroomed} Ether to get the exchange rate </p>


      <p>Total: {sendAmountGroomed} ETH </p>
      <p>Purchase Amount: {buyAmount} TOBY </p>
      <br/>
      <Button type="Button" variant="contained" onClick={handleShowStateButton}>More Info</Button>
      {contractInfo}
    </Paper>

    <Dialog PaperProps={dialogStyles} open={dialogOpen} >
      <p>{alertText}</p>
      <p><Button variant="contained" onClick={handleDialogClose} >Close</Button></p>
    </Dialog>
    </div>
  )

}

export default ShopItem
