import React, { Component } from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';
/* import { GrCart } from 'react-icons/gr'; */
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      arrOfCategories: [],
    };

    this.listCategories = this.listCategories.bind(this);
  }

  componentDidMount() {
    this.listCategories();
  }

  async listCategories() {
    const callCategories = await api.getCategories();
    this.setState({ arrOfCategories: callCategories });
    console.log(callCategories);
  }

  render() {
    const { arrOfCategories } = this.state;

    return (
      <main>
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
        <div>
          <label htmlFor="input-home">
            <input type="text" id="input-home" />
          </label>
          <Link to="/cart" data-testid="shopping-cart-button">
            {/* <GrCart /> */}
          </Link>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </main>
    );
  }
}

export default Home;
