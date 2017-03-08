'use strict';

const React = require('react')

const ListGroup = require('react-bootstrap/lib/ListGroup');
const ListGroupItem = require('react-bootstrap/lib/ListGroupItem');

const BasketSection = (props) => {

  // if we have products to use in this section, do so, otherwise fall back to the emptyMessage
  const items = (props.children && props.children.length) ? props.children : <ListGroupItem>{props.emptyMessage}</ListGroupItem>;

  return (
    <div className='panel-body'>
      <h2>{props.title}</h2>
      <ListGroup>
        {items}
      </ListGroup>
    </div>
  );

};

BasketSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  emptyMessage: React.PropTypes.string.isRequired
};

BasketSection.defaultProps = {
  emptyMessage: 'Nothing added yet'
};

module.exports = BasketSection;
