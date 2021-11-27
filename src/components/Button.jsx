import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { cardProduct, addCart, name } = this.props;
    return (
      <div>
        <button
          data-testid={ name === 'product' ? "product-detail-add-to-cart" : "product-add-to-cart"}
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
  cardProduct: PropTypes.string.isRequired,
  addCart: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default Button;

// Ajuda do João Oliveira Avelino no requisito 8
