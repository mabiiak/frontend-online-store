import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';
import { TiArrowBackOutline } from 'react-icons/ti';
import { getIdProducts } from '../services/api';
import Button from '../components/button/Button';
import '../css/product.css';

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
    getIdProducts(id).then((data) => {
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
      <div className="product-detail-container">

        <div className="product-detail-links">
          <Link className="link-back-home" to="/">
            <TiArrowBackOutline className="back-button" />
          </Link>
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            <GrCart className="cart-button" />
          </Link>
        </div>

        <div className="product-detail">

          <div className="product-detail-header">
            <h3 data-testid="product-detail-name">
              { title }
            </h3>
            <h3>{`- R$ ${price}`}</h3>
          </div>

          <div className="product-detail-card">
            <div>
              <img className="product-detail-image" src={ image } alt={ title } />
            </div>

            <div className="product-detail-description">
              <p>{ description }</p>
              <Button
                cardProduct={ this.state }
                addCart={ addCart }
                name="product"
              />
            </div>
          </div>

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
