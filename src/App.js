import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WalletProviderState from './context/WalletProvider/WalletProviderState';

import Home from './views/Home';
import MyAppBar from './views/AppBar';

// Styles
import './App.css'

const App = () => {
  return (
    <div className="App">
      <WalletProviderState>
        <MyAppBar />
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
    </WalletProviderState>
  </div>
  )
};

export default App;
