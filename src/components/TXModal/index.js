import React, { useContext, useEffect, useState } from 'react'

//components
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import transactionsContext from '../../context/Transactions/TransactionsContext';

//inline styles
const styles = {
  style: {
    backgroundColor: '#FFF5F5',
    padding: 20
  }
}

const TXModal = () => {
  const [isOpen, setOpen] = useState(false);
  const [txHash, setTxHash] = useState('');
  const [txStatus, setTxStatus] = useState('');

  const {
    setTransactions,
    txsContext
  } = useContext(transactionsContext);

  useEffect(async () => {
    // if a new transaction is added to the context
    let id = txsContext.length -1;
    if (txsContext[id] !== undefined) {
      if (txsContext[id].error.message) {
        setOpen(true);
        setTxHash(txsContext[id].error.message);
        setTxStatus(txsContext[id].status);
      }
      else {
        setOpen(true);
        setTxHash(id);
        setTxStatus(txsContext[id].status);
      }
    }
  }, [txsContext]);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <Dialog PaperProps={styles} open={isOpen} >
        <DialogTitle id="tx-dialog">Transaction:</DialogTitle>
        <List>
          <ListItem>
            <p>Status:</p>
            <ListItemText primary={txStatus} />
          </ListItem>
          <ListItem>
            <p>TxHash</p>
            <br/>
            <ListItemText secondary={txHash} />
          </ListItem>
          <ListItem>
            <Button variant="contained" onClick={() => handleClose()} >Close</Button>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default TXModal;
