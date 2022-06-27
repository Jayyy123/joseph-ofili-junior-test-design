import React, { Component } from 'react'
import CurrencyDropdown from '../PLD Components/CurrencyDropdown'
import CartDropdown from './CartDropdown'
import '../../styles/Cart.css'
import AddedItem from './AddedItem'

class CartPage extends Component {

  render() {
    const { currency, openCart, addItemtoCart,handleLink,openCurrency, switchCurrency, selectedItem } = this.props.value
    const itemTotal = selectedItem.reduce((total,current) => {return  parseInt(current.addedId * current.item.prices.filter(element => element.currency.symbol === currency)[0].amount) + total},0).toFixed(2)
    const tax =  (0.21 * itemTotal).toFixed(2)
    const total = parseInt(itemTotal) + parseInt(tax)
    return (
        <div className={openCart ? 'main main-cart' : 'main-cart'}>
        {openCart && <CartDropdown value = {{"items":selectedItem,currency,addItemtoCart}}/>}
        {openCurrency && <CurrencyDropdown value = {{switchCurrency,currency}}/>}
        <div className='cart' onClick={()=>{ 
            handleLink('',true) 
            switchCurrency('',true)}}>
            <div className='cart-page'>
                <h1><b>CART</b></h1>
                <div className=''>
                    <div className='cart-page-add'>
                    {selectedItem.map((element) => {
                        console.log('theeee ele is',element)
                        return (
                            <AddedItem value={{element,currency,cart:true,'no':element.addedId,addItemtoCart}} key={element.id} /> 
                            )
                        })}
                        </div>
                    <div className='cart-page-quantity'>
                        <h4 className=''>Tax (21%): {'  ' + currency + tax}</h4>
                    </div>
                    <div className='cart-page-quantity'>
                        <h4 className=''>Quantity: {selectedItem.length}</h4>
                    </div>
                    <div className='cart-page-total'>
                        <h4 className='tot'>Total: {'  ' + currency + total}
                        </h4>
                    </div>
                    <button type="submit" className=''>ORDER</button>
                </div>
            </div>
        </div>
        </div>
    )
  }
}

export default CartPage