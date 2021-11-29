import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import './cardProducts.css';

export default class CardProducts extends React.Component {
  render() {
    const { cardProduct, addCart } = this.props;

    return (
      cardProduct.map((product) => (
        <div
          className="card-container"
          data-testid="product"
          key={ product.id }
        >
          <Link
            className="card-link"
            data-testid="product-detail-link"
            to={ `product/${product.id}` }
          >
            <h3 className="card-title">{ product.title }</h3>
            <img
              className="card-image"
              src={ product.thumbnail }
              alt={ product.title }
            />
            <p>{`R$ ${product.price}`}</p>
          </Link>
          <Button
            className="card-button"
            addCart={ addCart }
            cardProduct={ product }
          />
        </div>
      ))
    );
  }
}

CardProducts.propTypes = {
  cardProduct: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  })),
  addCart: PropTypes.func,
}.isRequired;
