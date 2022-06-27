import React, { Component } from 'react'

class Prices extends Component {
  render() {
    const { symbol, currency } = this.props.value;
    return (
        <>
            {symbol.currency.symbol === currency && <div className='symb'>{symbol.currency.symbol + ' ' + symbol.amount}</div>}
        </>
    )
  }
}

export default Prices