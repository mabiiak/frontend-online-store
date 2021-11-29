import React from 'react';
import PropTypes from 'prop-types';
import { BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../css/cart.css';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      getListProduct: [],
      totalPrice: 0,
    };
    this.addToCart = this.addToCart.bind(this);
    this.decreaseToCart = this.decreaseToCart.bind(this);
  }

  componentDidMount() {
    this.getFromStorage();
  }

  getFromStorage() {
    const getSavedFromLocalStorage = JSON.parse(localStorage.getItem('listItemSelect'))
    || [];

    this.setState({ getListProduct: getSavedFromLocalStorage }, () => this.sumPrice());
  }

  sumPrice() {
    const { getListProduct: cart } = this.state;
    const total = cart.reduce(
      (acc, item) => parseFloat(acc) + parseFloat(item.price) * item.quantity, 0,
    );

    this.setState({ totalPrice: total });
  }

  addToCart(item) {
    const { addCart } = this.props;
    const cart = addCart(item);
    this.setState({ getListProduct: cart }, () => this.sumPrice());
  }

  decreaseToCart(item) {
    const { decrementCart } = this.props;
    const cart = decrementCart(item);
    this.setState({ getListProduct: cart }, () => this.sumPrice());
  }

  render() {
    const { getListProduct, totalPrice } = this.state;

    const mapLocalStorage = (getListProduct.map((product) => (
      <div className="cart-card-container" key={ product.id }>

        <BiTrash className="cart-icon-remove" />
        <img
          className="cart-image"
          src={ product.thumbnail }
          alt={ product.title }
        />
        <h5
          className="cart-title"
          data-testid="shopping-cart-product-name"
        >
          { product.title }
        </h5>

        <div className="cart-quantity-container">
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => this.decreaseToCart(product) }
          >
            -
          </button>

          <span
            className="cart-quantity"
            data-testid="shopping-cart-product-quantity"
          >
            {product.quantity}

          </span>

          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => this.addToCart(product) }
          >
            +
          </button>
        </div>

        <p>{`R$ ${product.price}`}</p>

      </div>
    )));

    return (
      <div className="cart-container">
        {getListProduct.length <= 0
          ? (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
          : (mapLocalStorage)}

        <div className="cart-footer">
          <h4>{`Total: R$ ${totalPrice}`}</h4>
          <button type="button">Finalizar pedido</button>
          <Link className="cart-footer-link" to="/">
            Continuar comprando
          </Link>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  addCart: PropTypes.func.isRequired,
  decrementCart: PropTypes.func.isRequired,
};

export default Cart;
