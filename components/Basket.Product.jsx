'use strict';

const React = require('react')

const ListGroupItem = require('react-bootstrap/lib/ListGroupItem');

const Rating = require('../atoms/Rating');

const BasketProduct = (props) => (
  <ListGroupItem>
    {props.image && <img className='img-responsive' src={props.imageUrl} alt={props.name} />}
    <h2>{props.name}</h2>
    {props.rating && (<Rating rating={props.rating} />)}
    {props.description && (<p>{props.description}</p>)}
    {props.children}
  </ListGroupItem>
);

BasketProduct.propTypes = {
  description: React.PropTypes.string,
  imageUrl: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  rating: React.PropTypes.number
};

module.exports = BasketProduct;
