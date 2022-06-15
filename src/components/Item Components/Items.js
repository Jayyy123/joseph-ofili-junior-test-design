import React, { Component } from 'react'
import Prices from './Prices'
import circle from '../../images/Circle Icon.png'

class Items extends Component {
  render() {
      const {element,currency,openCurrency, addItemtoCart} = this.props.value
    return (
            <div className={openCurrency ? 'item index' : 'item'}>
                <img className='gallery' src={element.gallery[0]} alt='Gallery'/>
                <div className='card-info'>
                  <div>
                    <h5>{element.name}</h5>
                    {element.prices.map((symbol,index) => <Prices value = {{symbol, currency}} key={index}/>)}
                  </div>
                  <img className='green-cart' src={circle} alt='green-cart' onClick={() => {
              addItemtoCart(element)
              console.log(element)
            }}/>
                </div>
            </div>
        // another
    )
  }
}

export default Items