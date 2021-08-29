import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Web3Modal from 'web3modal';
import  Web3 from 'web3';
//Styles
import '../../App.css'

//inline styles
const style01 = {
  backgroundColor: '#F9DBDB',
  color: 'black',
  fontFamily: "sans-serif",
  fontSize: "14pt"
}

const style02 = {
  color: 'black',
  fontFamily: "sans-serif",
  fontSize: "14pt",
  marginLeft: 'auto'
}

let web3;

const providerOptions = {
  /* See Provider Options Section */
};

const web3Modal = new Web3Modal({
    network: 'Rinkeby',
    cacheProvider: true, // optional
    providerOptions // required
})

const MyAppBar = () => {
  const [tokenBalance, setTokenBalance] = useState('0');
  const [connected, setConnected] = useState(false);

  useEffect(async () => {
    //await connect();
  }, []);

  const connect = async () => {
      try {
          let provider = await web3Modal.connect();
          web3 = new Web3(provider);
          setConnected(true);
          console.log(web3.currentProvider);
      }
      catch (ex) {
        console.log(ex);
      }
  }

  const groomWei = (weiValue) => {
    var factor = Math.pow(10, 4)
    var balance = this.context.drizzle.web3.utils.fromWei(weiValue)
    balance = Math.round(balance * factor) / factor
    return balance
  }


  return (
    <AppBar style={style01} position="static">
      <Toolbar>
        <Typography style={style01} variant="title" color="inherit">
            Contract Address: 0x1234
        </Typography>
        {connected ?
            <Typography style={style02} >
              Balance: 0 TOBY
            </Typography>
          : <Typography style={style02} >
              <Button
                variant="contained"
                onClick={async () => connect()}
              >
                Connect
              </Button>
            </Typography>
        }
      </Toolbar>
    </AppBar>
  )
 }

export default MyAppBar;
