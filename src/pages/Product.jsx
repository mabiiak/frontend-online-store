import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getIdProducts } from '../services/api';

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
    return (
      <div>
        <img src={ image } alt={ title } />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <h4>{ price }</h4>
        <p>{ description }</p>
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
};

export default Product;

// Ajuda do Eduardo Miyazaki no requisito 7
