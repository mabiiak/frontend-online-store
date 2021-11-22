import React, { Component } from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';
import * as api from '../services/api';
import CardProducts from '../components/CardProducts';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputProduct: '',
      arrayProducts: [],
      arrOfCategories: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.listCategories = this.listCategories.bind(this);
  }

  componentDidMount() {
    this.listCategories();
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({ inputProduct: value });
  }

  getProduct() {
    const { inputProduct } = this.state;
    const categoryId = '';
    api.getProductsFromCategoryAndQuery(categoryId, inputProduct)
      .then((result) => (this.setState({ arrayProducts: result.results })));
  }

  async listCategories() {
    const callCategories = await api.getCategories();
    this.setState({ arrOfCategories: callCategories });
  }

  render() {
    const { inputProduct, arrayProducts, arrOfCategories } = this.state;
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
        <div>
          <aside>
            {arrOfCategories.map((categorie) => (
              <button
                className="categories"
                key={ categorie.name }
                type="button"
                data-testid="category"
              >
                {categorie.name}
              </button>
            ))}
          </aside>
        </div>
        { arrayProducts.length > 0
          ? <CardProducts cardProduct={ arrayProducts } />
          : 'Nenhum produto foi encontrado' }
      </div>
    );
  }
}
