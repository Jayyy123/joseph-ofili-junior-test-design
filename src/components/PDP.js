import React, { Component } from 'react'
import '../styles/PDP.css'
import { removeTags } from '../utils/helpers'
import CartDropdown from './Cart Components/CartDropdown'
import Attributes from './Item Components/Attributes'
import Gallery from './Item Components/Gallery'
import Prices from './Item Components/Prices'
import CurrencyDropdown from './PLD Components/CurrencyDropdown'

class PDP extends Component {

  handleAdd = ()=>{

  }

  render() {
    const { selectedElement, currency, openCart, handleLink,openCurrency, switchCurrency, addItemToCart } = this.props.value
    console.log('current element for description is..',selectedElement[0].gallery.length)
    const name = selectedElement[0].name,
          description = selectedElement[0].description,
          galleryHead = selectedElement[0].gallery[0],
          gallery = selectedElement[0].gallery,
          brand = selectedElement[0].brand,
          attributes = selectedElement[0].attributes,
          prices = selectedElement[0].prices

    return (
      <div className={openCart ? 'main pdp-main' : 'pdp-main'}>
          {openCart && <CartDropdown value = {{"items":selectedElement[0],currency}}/>}
          {openCurrency && <CurrencyDropdown value = {{switchCurrency:switchCurrency,currency}}/>}
          <div className='pdp' onClick={()=>{ 
            handleLink('',true) 
            switchCurrency('',true)}}>

            <div className='images-box'>
              <div className='subs'>{gallery.map((element,index) => <Gallery key={index} value = {{element}}/>)}</div>
              <img className='head-img' src={galleryHead} alt='GALLERY' />
            </div>
          <div className='text'>
            <h3>{brand}</h3>
            <h3 className='name'>{name}</h3>
            <div>
              {attributes.map((element) => <Attributes value={{element}} key={element.id} />)}
            </div>
            <p className='size'>Price:</p>
            <h4>
              {prices.map((symbol,index) => <Prices value={{symbol,currency}} key={index} />)}
            </h4>
            <button type="submit" onClick={() => addItemToCart(selectedElement[0])}>ADD TO CART</button>
            <p className='summary'> {removeTags(description)} </p>
          </div>
          </div>
      </div>
    )
  }
}

export default PDP