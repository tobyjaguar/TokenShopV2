import React, { useContext, useEffect, useState} from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import TXModal from '../../components/TXModal'
import ShopItem from '../../components/ShopItem'

import walletContext from '../../context/WalletProvider/WalletProviderContext'

//inline styles
const styles = {
  backgroundColor: '#F9DBDB',
  color: 'black',
  fontFamily: "sans-serif",
  fontSize: "14pt",
  padding: 30
}

const Shop = () => {
  const [showShop, setShowShop] = useState(false)

  const {
    connected,
    account,
    tokenBalance
  } = useContext(walletContext)

  useEffect(() => {
    // initial load
  }, [])

  const handleShopButton = () => {
    console.log('button')
  }

  return (
    <main className="container">
        <Paper>
          <Typography style={styles}>
            Welcome to the Token Shop!
          </Typography>
        </Paper>

        <TXModal />
      <br/><br/>

      <br/>
      <Button type="Button" variant="contained" onClick={handleShopButton}> Buy Token </Button>
      <br/>
      <br/>
      {connected ? <ShopItem /> : null}

    </main>
  )
}

export default Shop;
