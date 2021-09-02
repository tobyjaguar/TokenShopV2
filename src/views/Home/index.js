import React, { useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Shop.jpg'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

/* components */
// import Account from '../Account'
// import ShopItem from '../ShopItem'
// import BurnToken from '../BurnToken'
// import TransferToken from '../TransferToken'
// import Admin from '../Admin'
// import TXModal from '../TXModal'

import {groomWei} from '../../utils/groomBalance'

//inline styles
const styles = {
  backgroundColor: '#F9DBDB',
  color: 'black',
  fontFamily: "sans-serif",
  fontSize: "14pt",
  padding: 30
}

const Home = () => {

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

  return (
    <main className="container">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <div className="pure-u-1-1 header">
            <Link to='/shop'>
              <img src={logo} alt="toby-token-shop" width={'90%'} />
            </Link>
          </div>
        </Grid>

        <Grid item>
        <Paper>
          <Typography style={styles}>
          This is a token shop where you can swap TOBY tokens for Stable tokens.
          Each TOBY token costs $1, and is swapped for equivalent Stable tokens.
          The goal is to buy TOBY tokens here and then sell them back to Toby in person.
          TOBY is an ERC20 token. Please have MetaMask enabled to play.
          </Typography>
        </Paper>
        </Grid>

        <br/><br/>
        <Grid item>
          <a href="https://www.freepik.com/free-photos-vectors/flower"><font color="#F9DBDB">Flower vector created by Rawpixel.com - Freepik.com</font></a>
        </Grid>
      </Grid>
    </main>
  )
}

export default Home;
