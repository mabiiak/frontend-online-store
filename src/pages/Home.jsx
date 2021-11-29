import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/home.css';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';
import * as api from '../services/api';
import CardProducts from '../components/cardProducts/CardProducts';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputProduct: '',
      arrayProducts: [],
      arrOfCategories: [],
      listSelectCategorie: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.listCategories = this.listCategories.bind(this);
    this.getCategory = this.getCategory.bind(this);
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

  getCategory(categoryId) {
    const { inputProduct } = this.state;
    api.getProductsFromCategoryAndQuery(categoryId, inputProduct)
      .then((data) => this.setState({ listSelectCategorie: data.results }));
  }

  async listCategories() {
    const callCategories = await api.getCategories();
    this.setState({ arrOfCategories: callCategories });
  }

  render() {
    const {
      state: {
        inputProduct,
        arrayProducts,
        arrOfCategories,
        listSelectCategorie,
      },
      props: {
        addCart,
      },
    } = this;

    return (
      <div className="main-conatiner">

        <header className="main-header">
          <div className="main-bar-search">
            <label htmlFor="input-home">
              <input
                className="main-input"
                value={ inputProduct }
                type="text"
                id="input-home"
                onChange={ this.handleChange }
                data-testid="query-input"
              />
            </label>

            <button
              className="main-button"
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
              <GrCart className="cart-button" />
            </Link>
          </div>
          <p
            className="main-text"
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>

        </header>

        <section className="main-products">

          <div className="main-categories">
            {arrOfCategories.length > 0
            && arrOfCategories.map((categorie) => (
              <button
                className="categories"
                key={ categorie.name }
                type="button"
                data-testid="category"
                onClick={ () => this.getCategory(categorie.id) }
              >
                {categorie.name}
              </button>
            ))}
          </div>

          <div className="main-list-products">

            { listSelectCategorie.length > 0
              && <CardProducts
                cardProduct={ listSelectCategorie }
                addCart={ addCart }
              /> }

            { arrayProducts.length > 0
              ? <CardProducts cardProduct={ arrayProducts } addCart={ addCart } />
              : 'Nenhum produto foi encontrado' }

          </div>

        </section>

      </div>
    );
  }
}

Home.propTypes = {
  addCart: PropTypes.func.isRequired,
};
