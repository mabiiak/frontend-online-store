import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardProducts extends React.Component {
  render() {
    const { cardProduct } = this.props;

    return (
      cardProduct.map((product) => (
        <div data-testid="product" key={ product.Id }>
          <Link data-testid="product-detail-link" to={ `product/${product.id}` }>
            <h3>{product.title}</h3>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{product.price}</p>
          </Link>
        </div>
      ))
    );
  }
}

CardProducts.propTypes = {
  cardProduct: PropTypes.string.isRequired,
};
