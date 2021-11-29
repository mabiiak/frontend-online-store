import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Product from '../pages/Product';

class Routes extends Component {
  addCart(item) {
    const cart = JSON.parse(localStorage.getItem('listItemSelect')) || [];
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex >= 0) {
      cart[itemIndex].quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem('listItemSelect', JSON.stringify(cart));
    return cart;
  }

  decrementCart(item) {
    const cart = JSON.parse(localStorage.getItem('listItemSelect')) || [];
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex >= 0) {
      cart[itemIndex].quantity -= 1;
    }
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }

    localStorage.setItem('listItemSelect', JSON.stringify(cart));
    return cart;
  }

  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Home
              { ...props }
              addCart={ this.addCart }
              decrementCart={ this.decrementCart }
            />) }
          />
          <Route
            path="/cart"
            render={ (props) => (<Cart
              { ...props }
              addCart={ this.addCart }
              decrementCart={ this.decrementCart }
            />) }
          />
          <Route
            exact
            path="/product/:id"
            render={ (props) => (<Product
              { ...props }
              addCart={ this.addCart }
              decrementCart={ this.decrementCart }
            />) }
          />
        </Switch>
      </main>
    );
  }
}

export default Routes;
