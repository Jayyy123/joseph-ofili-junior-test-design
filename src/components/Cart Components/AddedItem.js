import React, { Component } from 'react'
import Attributes from '../Item Components/Attributes'
import Prices from '../Item Components/Prices'

class AddedItem extends Component {
  render() {
      const {element, currency, cart} = this.props.value
      console.log('element is ',element,currency)

      return cart === undefined ?  (
      <div className='carted-items'>

          <div className='cart-text'>
            <h6>{element.brand}</h6>
            <h6 className='name'>{element.name}</h6>
            <h6>
              {element.prices.map((symbol,index) => <Prices value={{symbol,currency}} key={index} />)}
            </h6>
            <div className='attr'>
              {element.attributes.map((element) => <Attributes value={{element}} key={element.id} />)}
            </div>
          </div>

          <div className='ranger'>
            <div>+</div>
            <h6>2</h6>
            <div>-</div>
          </div>


          <img src = {element.gallery[0]} alt='gallery' />
      </div>
    ):  (
      <div className='carted-items'>

        <div className='cart-text'>
          <h4>{element.brand}</h4>
          <h4 className='name'>{element.name}</h4>
          <h4>
            {element.prices.map((symbol,index) => <Prices value={{symbol,currency}} key={index} />)}
          </h4>
          <div className='cart-page-attr'>
            {element.attributes.map((element) => <Attributes value={{element}} key={element.id} />)}
          </div>
        </div>
        <div className='cart-page-right'>
          <div className='ranger'>
            <div>+</div>
            <h4>2</h4>
            <div>-</div>
          </div>

          <img src = {element.gallery[0]} alt='gallery' />
        </div>
      </div>  
    )
    }
  }

export default AddedItem