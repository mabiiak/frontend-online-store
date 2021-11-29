import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.css';

class Button extends Component {
  render() {
    const { cardProduct, addCart, name } = this.props;
    return (
      <div>
        <button
          className="add-cart-button"
          data-testid={
            name === 'product'
              ? 'product-detail-add-to-cart'
              : 'product-add-to-cart'
          }
          type="button"
          onClick={ () => addCart(cardProduct) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  cardProduct: PropTypes.string,
  addCart: PropTypes.func,
  name: PropTypes.string,
}.isRequired;

export default Button;

// Ajuda do João Oliveira Avelino no requisito 8
