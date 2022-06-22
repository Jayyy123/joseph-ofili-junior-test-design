import React, { Component } from 'react'

class Prices extends Component {
  render() {
    const { symbol, currency } = this.props.value;
    return (
        <>
            {symbol.currency.symbol === currency && <p className='symb'>{symbol.currency.symbol + ' ' + symbol.amount}</p>}
        </>
    )
  }
}

export default Prices