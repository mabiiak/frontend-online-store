import React from 'react';
import PropTypes from 'prop-types';
import { BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      getListProduct: [],
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

    this.setState({ getListProduct: getSavedFromLocalStorage });
  }

  sumPrice() {
    const { getListProduct: cart } = this.state;
    const total = cart.reduce((acc, item) => parseFloat(acc) + parseFloat(item.price), 0);
    return total;
  }

  addToCart(item) {
    const { addCart } = this.props;
    const cart = addCart(item);
    this.setState({ getListProduct: cart });
  }

  decreaseToCart(item) {
    const { decrementCart } = this.props;
    const cart = decrementCart(item);
    this.setState({ getListProduct: cart });
  }

  render() {
    const { getListProduct } = this.state;

    const mapLocalStorage = (getListProduct.map((product) => (
      <div key={ product.id }>
        <h3 data-testid="shopping-cart-product-name">{ product.title }</h3>
        <img width="200" src={ product.thumbnail } alt={ product.title } />
        <p>{ product.price }</p>
        <div>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => this.decreaseToCart(product) }
          >
            -

          </button>

          <span data-testid="shopping-cart-product-quantity">{product.quantity}</span>

          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => this.addToCart(product) }
          >
            +

          </button>
        </div>
        <BiTrash />
      </div>
    )));

    return (
      <div>
        {getListProduct.length <= 0
          ? (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
          : (mapLocalStorage)}

        <div>
          <p>{`Total: R$ ${this.sumPrice()}`}</p>
          <button type="button">Finalizar Compra</button>
          <Link to="/">
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
