import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CardProducts from '../components/CardProducts';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputProduct: '',
      arrayProducts: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({ inputProduct: value });
  }

  getProduct() {
    const { inputProduct } = this.state;
    const categoryId = '';
    getProductsFromCategoryAndQuery(categoryId, inputProduct)
      .then((result) => (this.setState({ arrayProducts: result.results })));
  }

  render() {
    const { inputProduct, arrayProducts } = this.state;
    return (
      <div>
        <label htmlFor="input-home">
          <input
            value={ inputProduct }
            type="text"
            id="input-home"
            onChange={ this.handleChange }
            data-testid="query-input"
          />
        </label>
        <button
          type="button"
          onClick={ this.getProduct }
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <GrCart />
        </Link>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        { arrayProducts.length > 0
          ? <CardProducts cardProduct={ arrayProducts } />
          : 'Nenhum produto foi encontrado' }
      </div>
    );
  }
}

export default Home;
