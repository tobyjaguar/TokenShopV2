import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WalletProviderState from './context/WalletProvider/WalletProviderState';
import TransactionsState from './context/Transactions/TransactionsState';

import MyAppBar from './views/AppBar';
import Home from './views/Home';
import Shop from './views/Shop';

// Styles
import './App.css'

const App = () => {
  return (
    <div className="App">
      <WalletProviderState>
        <TransactionsState>
          <MyAppBar />
          <Router>
            <Switch>
              <Route path="/shop" component={Shop} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </TransactionsState>
    </WalletProviderState>
  </div>
  )
};

export default App;
