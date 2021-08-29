import React, { useContext, useEffect, useState} from 'react'
import logo from '../../assets/Shop.jpg'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

/* components */
// import Account from '../Account'
// import ShopItem from '../ShopItem'
// import BurnToken from '../BurnToken'
// import TransferToken from '../TransferToken'
// import Admin from '../Admin'
// import TXModal from '../TXModal'

import {groomWei} from '../../utils/groomBalance';

//inline styles
const styles = {
  backgroundColor: '#F9DBDB',
  color: 'black',
  fontFamily: "sans-serif",
  fontSize: "14pt",
  padding: 30
}

const Home = () => {
  // constructor(props, context) {
  //   super(props)
  //
  //   this.contracts = context.drizzle.contracts
  //
  //   this.handleInputChange = this.handleInputChange.bind(this)
  //   this.handleAccountButton = this.handleAccountButton.bind(this)
  //   this.handleShopButton = this.handleShopButton.bind(this)
  //   this.handleTransferButton = this.handleTransferButton.bind(this)
  //   this.handleBurnButton = this.handleBurnButton.bind(this)
  //   this.handleAdminButton = this.handleAdminButton.bind(this)
  //
  //   this.state = {
  //       showAdmin: false,
  //       showShop: false,
  //       showBurn: false,
  //       showTransfer: false,
  //       showAccount: false,
  //       dataKeyOwner: null,
  //       dataKeyTknBalance: null,
  //       shopKeeper: '',
  //       tokenBalance: ''
  //   }
  // }
  //
  // componentDidMount() {
  //   const dataKeyOwner = this.contracts.ERC20TokenShop.methods["owner"].cacheCall()
  //   const dataKeyTknBalance = this.contracts.ERC20TokenShop.methods["getTokenBalance"].cacheCall(this.props.accounts[0])
  //   this.setState({dataKeyOwner, dataKeyTknBalance})
  //   this.setShopKeeper()
  //   this.setTokenBalance()
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.TokenShop !== prevProps.TokenShop) {
  //     this.setShopKeeper()
  //     this.setTokenBalance()
  //   }
  // }

  const handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  const setShopKeeper = () => {
    if (this.props.TokenShop.owner[this.state.dataKeyOwner] !== undefined && this.state.dataKeyOwner !== null) {
      this.setState({
        shopKeeper: this.props.TokenShop.owner[this.state.dataKeyOwner].value
      })
    }
  }

  const setTokenBalance = () => {
    if (this.props.TokenShop.getTokenBalance[this.state.dataKeyTknBalance] !== undefined && this.state.dataKeyTknBalance !== null) {
      this.setState({
        tokenBalance: this.props.TokenShop.getTokenBalance[this.state.dataKeyTknBalance].value
      })
    }
  }

  const handleAccountButton = () => {
      this.setState({
        showAccount: !this.state.showAccount
      })
  }

  const handleShopButton = () => {
    this.setState({
      showShop: !this.state.showShop
    })
  }

  const handleBurnButton = () => {
    this.setState({
      showBurn: !this.state.showBurn
    })
  }

  const handleTransferButton = () => {
    this.setState({
      showTransfer: !this.state.showTransfer
    })
  }

  const handleAdminButton = () => {
    var owner
    owner = this.props.accounts[0]
    if (this.state.shopKeeper === owner) {
      this.setState({
        showAdmin: !this.state.showAdmin
      })
    }
  }

  // groomWei(weiValue) {
  //   var factor = Math.pow(10, 4)
  //   var balance = this.context.drizzle.web3.utils.fromWei(weiValue)
  //   balance = Math.round(balance * factor) / factor
  //   return balance
  // }

  // render() {
  //   var tknBalanceGroomed = this.groomWei(this.state.tokenBalance)
  //
  //   var displayAccount
  //   var displayAdmin
  //   var displayShop
  //   var displayBurn
  //   var displayTransfer
  //
  //   if (this.state.showAccount) {
  //     displayAccount = <Account tknBalance={tknBalanceGroomed} />
  //   }
  //
  //   if (this.state.showShop) {
  //     displayShop = <ShopItem />
  //   }
  //
  //   if (this.state.showBurn) {
  //     displayBurn = <BurnToken tknBalance={this.state.tokenBalance} />
  //   }
  //
  //   if (this.state.showTransfer) {
  //     displayTransfer = <TransferToken tknBalance={this.state.tokenBalance} />
  //   }
  //
  //   if (this.state.showAdmin) {
  //     displayAdmin = <Admin />
  //   }

    return (
      <main className="container">

          <div className="pure-u-1-1 header">
            <img src={logo} alt="toby-token-shop" width={600} />
          </div>

            <Paper>
              <Typography style={styles}>
              This is a token shop where you can swap TOBY tokens for Stable tokens.
              Each TOBY token costs $1, and is swapped for equivalent Stable tokens.
              The goal is to buy TOBY tokens here and then sell them back to Toby in person.
              TOBY is an ERC20 token. Please have MetaMask enabled to play.
              </Typography>
            </Paper>
    <br/><br/>

            <a href="https://www.freepik.com/free-photos-vectors/flower"><font color="#F9DBDB">Flower vector created by Rawpixel.com - Freepik.com</font></a>
      </main>
    )
}

export default Home;
