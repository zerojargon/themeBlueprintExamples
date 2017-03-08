'use strict'

const React = require('react')

const Basket = require('./Basket')
const CallToAction = require('./atoms/CallToAction')

const SomeContainerWithBasket = (props) => {

  const CTA = (<CallToAction
    onClick={props.handleNavigateToNextStage}
  >
    Proceed to Payment
  </CallToAction>)

  return (
    <section>
      <Basket
        cta={CTA}
        title="Your Awesome Basket"
        totalPrice={props.totalPrice}
      >
        <Basket.Section
          title="Your Accommodation"
        >
          <Basket.Product
            imageUrl={props.accommodation.imageUrl}
            name={props.accommodation.name}
            rating={props.accommodation.rating}
          >
            <ul>
              <li>Check-in: {props.accommodation.checkInDateTimeString}</li>
              <li>Check-Out: {props.accommodation.checkOutDateTimeString}</li>
            </ul>
          </Basket.Product>
        </Basket.Section>
        <Basket.Section
          title="Upgrades"
        >
          {props.upgrades.map(upgrade => (
            <Basket.Product
              name={upgrade.name}
            >
              <Button
                bsStyle="link"
                onClick={handleUpgradeRemoval.bind(null, upgrade.id)}
              >
                Remove this upgrade
              </Button>
            </Basket.Product>
          ))}
        </Basket.Section>
      </Basket>
    </section>
  )
}

SomeContainerWithBasket.propTypes = {
  accommodation: React.PropTypes.shape({
    checkInDateTimeString: React.PropTypes.string.isRequired,
    checkOutDateTimeString: React.PropTypes.string.isRequired,
    imageUrl: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    rating: React.PropTypes.number.isRequired
  }).isRequired,
  handleNavigateToNextStage: React.PropTypes.func.isRequired,
  handleUpgradeRemoval: React.PropTypes.func.isRequired,
  totalPrice: React.PropTypes.number.isRequired,
  upgrades: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired
    })
  ).isRequired
}

SomeContainerWithBasket.defaultProps = {
  upgrades: []
}

module.exports = SomeContainerWithBasket
