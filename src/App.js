import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Cart from './components/cart';
import Default from './components/Defualt';
import Details from './components/Details';
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Model from './components/Model';




class App extends Component {
  
  constructor(props){
    super(props);

  }

  render(){
  return (
   <React.Fragment>
      
      <Navbar />
      <Switch>
        <Route exact path='/'component={ProductList} />
        <Route path='/details'component={Details} />
        <Route path='/cart'component={Cart} />
        <Route component={Default} />
      </Switch>
      <Model />
    
   </React.Fragment>
  );
  }
}

export default App;
