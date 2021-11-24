import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Product from '../pages/Product';

class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
          <Route exact path="/product/:id" component={ Product } />
        </Switch>
      </main>
    );
  }
}

export default Routes;
