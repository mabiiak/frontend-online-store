import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      getListProduct: [],
      /*  cont: 0, */
    };

    this.getFromStorage = this.getFromStorage.bind(this);
    /* this.contItensCart = this.contItensCart.bind(this); */
  }

  componentDidMount() {
    this.getFromStorage();
  }

  getFromStorage() {
    const getSavedFromLocalStorage = JSON.parse(localStorage.getItem('listItemSelect'));
    if (getSavedFromLocalStorage) {
      this.setState({ getListProduct: getSavedFromLocalStorage });
    }
  }

  /* contItensCart() {
    const { getListProduct } = this.state;
    const conts = getListProduct.reduce((acc, current) => {
      if (current.id === acc.id) {
        acc.push(current);
      }
      return acc;
    }, []);
    this.setState({ cont: conts.length });
  } */

  /* contItensCart() {

  } */

  render() {
    const { getListProduct } = this.state;
    const mapLocalStorage = (getListProduct.map((product) => (
      <div key={ product.id }>
        <h3 data-testid="shopping-cart-product-name">{ product.title }</h3>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{ product.price }</p>
        <span data-testid="shopping-cart-product-quantity">
          1
        </span>
      </div>
    )));

    return (
      <div>
        {getListProduct.length <= 0
          ? (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
          : (mapLocalStorage)}

      </div>
    );
  }
}

export default Cart;
