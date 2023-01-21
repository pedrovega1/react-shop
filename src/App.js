import React from 'react';
import data from './components/Data';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/frontend/Routes/Routes';

function App() {
  const {productItems} = data;
  return(
    <Router>
      <Header/>
      <Routes/>
    </Router>
  )
}

export default App;
