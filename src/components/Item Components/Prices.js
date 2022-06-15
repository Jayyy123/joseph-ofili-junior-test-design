import React, { Component } from 'react'

class Prices extends Component {
  render() {
    const { symbol, currency } = this.props.value;
    return (
        <>
            {symbol.currency.symbol === currency && <p>{symbol.currency.symbol + symbol.amount}</p>}
        </>
    )
  }
}

export default Prices