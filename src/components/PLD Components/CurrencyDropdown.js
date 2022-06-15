import React, { Component } from 'react'
import '../../styles/CurrencyDropdown.css'

class CurrencyDropdown extends Component {
  render() {
      const { currency, switchCurrency } = this.props.value
    return (
        <div>
            <div className='currency-dropdown-box'>
                <div onClick={()=>switchCurrency('$')} className={currency === '$' ? 'currency' : ''}>$ USD</div>
                <div onClick={()=>switchCurrency('£')} className={currency === '£' ? 'currency' : ''}>£ EUR</div>
                <div onClick={()=>switchCurrency('¥')} className={currency === '¥' ? 'currency' : ''}>￥JPY</div>
                <div onClick={()=>switchCurrency('A$')} className={currency === 'A$' ? 'currency' : ''}>A$ AUD</div>
                <div onClick={()=>switchCurrency('₽')} className={currency === '₽' ? 'currency' : ''}>₽ RUB</div>
            </div>
        </div>
    )
  }
}

export default CurrencyDropdown