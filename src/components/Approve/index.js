import React, { useContext, useEffect, useState } from 'react'

import web3 from 'web3'

//components
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Dialog from '@material-ui/core/Dialog'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

import {groomWei} from '../../utils/groomBalance'

import walletContext from '../../context/WalletProvider/WalletProviderContext'
import contractsContext from '../../context/Contracts/ContractsContext'

const TRFL_NAME = process.env.REACT_APP_TRFL_TOKEN_NAME
const TRFL_ADDRESS = process.env.REACT_APP_TRFL_TOKEN_CONTRACT_ADDRESS
const USDC_ADDRESS = process.env.REACT_APP_USDC_TOKEN_CONTRACT_ADDRESS
const DAI_ADDRESS = process.env.REACT_APP_DAI_TOKEN_CONTRACT_ADDRESS

const APPROVAL_AMOUNT = process.env.REACT_APP_APPROVAL_AMOUNT

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

const Approve = () => {
  const [dialogOpen, setDialog] = useState(false)
  const [decimals, setDecimals] = useState('18')
  const [weiAmount, setWeiAmount] = useState('0')
  const [buyAmount, setBuyAmount] = useState('0')
  const [alertText, setText] = useState('')
  const [selectedToken, setSelectedToken] = useState('')

  const {
    connected,
    providerContext,
    account,
    tokenBalance
  } = useContext(walletContext);

  const {
    contracts
  } = useContext(contractsContext);

  useEffect(async () => {
    // initial load
    if (connected) {
      setDecimals(await contracts.tokenShop.methods.getTokenDecimals().call({from: account}))
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

  const handleApproveButton = async () => {
    let zero = web3.utils.toBN(0)
    let amountBN = web3.utils.toBN(buyAmount)
    if (amountBN.gt(zero)) {
      await contracts.tokenShop.methods.buyToken(selectedToken,buyAmount).send({from: account})
    } else {
      setText("Oops! Check purchase amount.")
      handleDialogOpen()
    }
  }

  let menu = [
    {
      "TRFL": "TRFL"
    }
  ]

  let sendAmountGroomed = groomWei(weiAmount)

  return (
    <div>
      <Paper style={styles} elevation={5}>
        <h3><p>Approve a Trade: </p></h3>
        <MenuList>

        </MenuList>
        <Button type="Button" variant="contained" onClick={handleApproveButton}>Buy</Button>


      <Dialog PaperProps={dialogStyles} open={dialogOpen} >
        <p>{alertText}</p>
        <p><Button variant="contained" onClick={handleDialogClose} >Close</Button></p>
      </Dialog>
      </Paper>
    </div>
  )

}

export default Approve
