import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClick, cardProduct } = this.props;
    return (
      <div>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => onClick(cardProduct) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  cardProduct: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;

// Ajuda do João Oliveira Avelino no requisito 8
