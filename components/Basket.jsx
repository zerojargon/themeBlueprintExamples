'use strict'

const React = require('react')

const BasketProduct = require('./BasketProduct')
const BasketSection = require('./BasketSection')

const Basket = (props) => {

  // only show a heading if we have a title
  const heading = (props.title) ? (
    <div className="panel-heading">
      <h3 className="panel-title">{props.title}</h3>
    </div>
  ) : null

  return (
    <aside className='panel panel-default'>
      {props.children}
      <div className='panel-footer'>
        <h2 className='pull-left'>Package Total</h2> <h1 className='pull-right'>{props.currencySymbol}{props.totalPrice}</h1>
        {props.callToAction && props.callToAction}
      </div>
    </aside>
  )
}

Basket.Product = BasketProduct
Basket.Section = BasketSection

Basket.propTypes = {
  callToAction: React.PropTypes.element,
  currencySymbol: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  totalPrice: React.PropTypes.number.isRequired
}

Basket.defaultProps = {
  currencySymbol: '£'
}

module.exports = Basket