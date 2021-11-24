import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super();

    this.saveCartItems = this.saveCartItems.bind(this);
  }

  saveCartItems() {
    const sendProductToLocalStorage = (cartItems) => {
      localStorage.setItem('cartItemKey', JSON.stringify(cartItems));
    };
    return sendProductToLocalStorage;
  }

  render() {
    return (
      <div>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.saveCartItems }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default Button;
