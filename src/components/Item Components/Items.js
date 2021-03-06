import React, { Component } from 'react'
import Prices from './Prices'
import circle from '../../images/Circle Icon.png'
import { Link } from 'react-router-dom';

class Items extends Component {
  render() {
      const {element,currency,openCurrency, addItemtoCart, setSelected} = this.props.value
    return element.inStock ? (
      <div className={openCurrency ? 'item index' : 'item'}>
          <Link to='/pdp' onClick={() => setSelected(element)}>
            <img className='gallery' src={element.gallery[0]} alt='Gallery'/>
          </Link>
            <div className='card-info'>
          <Link to='/pdp' onClick={() => setSelected(element)}>
              <div>
                <h5>{element.name}</h5>
                {element.prices.map((symbol,index) => <Prices value = {{symbol, currency}} key={index}/>)}
              </div>
          </Link>
              <img className='green-cart' src={circle} alt='green-cart' onClick={() => {
          addItemtoCart(element)
          console.log(element)
        }}/>
            </div>
        </div>
        // another
    ) : (
      <div className={openCurrency ? 'item stock index' : 'item stock'}>
            <p className='notin'>Not in Stock</p>
            <img className='gallery' src={element.gallery[0]} alt='Gallery'/>
            <div className='card-info'>
              <div>
                <h5>{element.name}</h5>
                {element.prices.map((symbol,index) => <Prices value = {{symbol, currency}} key={index}/>)}
              </div>
              {/* <img className='green-cart' src={circle} alt='green-cart'/> */}
            </div>
        </div>
        // another
    ) 
  }
}

export default Items