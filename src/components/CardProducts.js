import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

export default class CardProducts extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     selectProduct: [],
  //   };

  //   this.addCart = this.addCart.bind(this);
  // }

  // addCart(item) {
  //   console.log(item);
  //   this.setState((prevState) => {
  //     this.setState({ selectProduct: [...prevState.selectProduct, item] });
  //   }, () => {
  //     const { selectProduct } = this.state;
  //     localStorage.setItem('listItemSelect', JSON.stringify(selectProduct));
  //   });
  // }

  render() {
    const { cardProduct, addCart } = this.props;

    return (
      cardProduct.map((product) => (
        <div data-testid="product" key={ product.id }>
          <Link data-testid="product-detail-link" to={ `product/${product.id}` }>
            <h3>{ product.title }</h3>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{ product.price }</p>
          </Link>
          <Button
            addCart={ addCart }
            cardProduct={ product }
          />
        </div>
      ))
    );
  }
}

CardProducts.propTypes = {
  cardProduct: PropTypes.string.isRequired,
  addCart: PropTypes.func.isRequired,
};
