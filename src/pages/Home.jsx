import React, { Component } from 'react';
import * as api from '../services/api';
import '../css/Home.css';

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
            {
              arrOfCategories.map((categorie) => (
                <button
                  className="categories"
                  key={ categorie.name }
                  type="button"
                  data-testid="category"
                >
                  { categorie.name }
                </button>
              ))
            }
          </aside>
        </div>
        <section>
          <label htmlFor="input-home">
            <input type="text" id="input-home" />
          </label>
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </section>
      </main>
    );
  }
}

export default Home;
