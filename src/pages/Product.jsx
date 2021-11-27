import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';
import { getIdProducts } from '../services/api';
import Button from '../components/Button';

class Product extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      price: '',
      image: '',
      description: '',
    };

    this.getAPI = this.getAPI.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getAPI(id);
  }

  getAPI() {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    getIdProducts(id).then((data) => {
      console.log(data);
      this.setState({
        title: data.title,
        price: data.price,
        image: data.thumbnail,
        description: data.warranty,
      });
    });
  }

  render() {
    const { title, price, image, description } = this.state;
    const { addCart } = this.props;

    return (
      <div className="product-details-container">
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <GrCart />
        </Link>
        <div>
          <img src={ image } alt={ title } />
          <h3 data-testid="product-detail-name">{ title }</h3>
          <h4>{ price }</h4>
          <p>{ description }</p>
          <Button
            cardProduct={ this.state }
            addCart={ addCart }
            name="product"
          />
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  addCart: PropTypes.func.isRequired,
};

export default Product;

// Ajuda do Eduardo Miyazaki no requisito 7
