import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Product from '../pages/Product';

class Routes extends Component {
  constructor() {
    super();

    this.state = {
      selectProduct: [],
    };

    this.addCart = this.addCart.bind(this);
  }

  addCart(item) {
    console.log(item);
    this.setState((prevState) => {
      this.setState({ selectProduct: [...prevState.selectProduct, item] });
    }, () => {
      const { selectProduct } = this.state;
      localStorage.setItem('listItemSelect', JSON.stringify(selectProduct));
    });
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" render={ (props) => <Home { ...props } addCart={ this.addCart } /> } />
          <Route path="/cart" component={ Cart } />
          <Route exact path="/product/:id" render={ (props) => <Product { ...props } addCart={ this.addCart } /> } />
        </Switch>
      </main>
    );
  }
}

export default Routes;
