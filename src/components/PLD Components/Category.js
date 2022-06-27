import React, { Component } from 'react'
import '../../styles/Category.css'
import CartDropdown from '../Cart Components/CartDropdown'
import CurrencyDropdown from './CurrencyDropdown'
import Items from '../Item Components/Items'

export class Category extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       changed:false,
       currencyI:'$',
       selectedItem:[],
    }
  }


  render() {
      const {handleLink,openCart,openCurrency,switchCurrency,currency,data,category, setSelected, addItemtoCart, selectedItem} = this.props.value
      const categoryName = category.charAt(0).toUpperCase() + category.slice(1)
      const item = data && (category === 'clothes' ? data.categories[1].products : category === 'tech' ? data.categories[2].products : data.categories[0].products)
      const items = selectedItem
    return (
      <div className={openCart ? 'main' : ''}>
          {openCart && <CartDropdown value = {{items,currency,addItemtoCart}}/>}
          {openCurrency && <CurrencyDropdown value = {{switchCurrency:switchCurrency,currency}}/>}
          <div className='main-container' onClick={()=>{ 
            handleLink('',true) 
            switchCurrency('',true)}}>

            <h2>{categoryName}</h2>
            {console.log('item is',item,items)}
            <div className='item-body'>
              {item.map(element => <Items value = {{element, currency, openCurrency, addItemtoCart, setSelected}} key={element.id}/>)}
            </div>
          </div>
      </div>
    )
  }
}

export default Category