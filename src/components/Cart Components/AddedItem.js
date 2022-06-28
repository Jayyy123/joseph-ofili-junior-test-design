import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Attributes from '../Item Components/Attributes'
import Prices from '../Item Components/Prices'

class AddedItem extends Component {
  render() {
      const {element, currency, cart, no, addItemtoCart} = this.props.value
      console.log('element is ',element,currency)

      const defaults = {}
      defaults.color  = element.color
      defaults.size  = element.size
      defaults.answer = element.answer

      return cart === undefined ?  (
      <div className='carted-items'>

          <div className='cart-text'>
            <h6>{element.item.brand}</h6>
            <h6 className='name'>{element.item.name}</h6>
            <h6>
              {element.item.prices.map((symbol,index) => <Prices value={{symbol,currency}} key={index} />)}
            </h6>
            <div className='attr'>
              {element.item.attributes.map((element) => <Attributes value={{element,defaults}} key={element.id} />)}
            </div>
            <button type='submit' className='remove' onClick={()=> addItemtoCart(element.item,false,true)}>Remove</button>
          </div>

          <div className='ranger'>
            <div onClick={()=> addItemtoCart(element.item)}>+</div>
            <h6>{no}</h6>
            <div onClick={()=> addItemtoCart(element.item,true)}>-</div>
          </div>


          <img src = {element.item.gallery[0]} alt='gallery' />
      </div>
    ):  (
      <div className='carted-items'>
        <div className='cart-text'>
        <Link to={'/pdp'}>
          <h4>{element.item.brand}</h4>
          <h4 className='name'>{element.item.name}</h4>
        </Link>
          <h4>
            {element.item.prices.map((symbol,index) => <Prices value={{symbol,currency}} key={index} />)}
          </h4>
          <div className='cart-page-attr'>
            {element.item.attributes.map((element) => <Attributes value={{element,defaults}} key={element.id} />)}
          </div>
        </div>
        <div className='cart-page-right'>
          <div className='ranger'>
          <div onClick={()=> addItemtoCart(element.item)}>+</div>
            <h4 className='no'>{no}</h4>
            <div onClick={()=> addItemtoCart(element.item,true)}>-</div>
          </div>

          <img src = {element.item.gallery[0]} alt='gallery' />
        </div>
      </div>  
    )
    }
  }

export default AddedItem