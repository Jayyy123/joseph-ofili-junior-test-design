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
  checkIfInCart = (item) => {
    const {selectedItem} = this.state
    for(var i = 0; i<=selectedItem.length; i++){
      if(selectedItem[i] === item){
        // console.log('returned\n\n',i)
        return i;
      }else{
        return -1;
      }
    }
  }

  addItemtoCart = (item) => {
    const {selectedItem} = this.state
    const newItems = [...selectedItem]
    const index =  this.checkIfInCart(item) 
    console.log(index)
    if (index > -1){
      newItems.splice(index,1)
      this.setState({selectedItem:newItems})
      console.log('worked')
    }else{
      this.setState({selectedItem:[...selectedItem,item]})
      console.log('hereee')
    }
  }


  render() {
      const {handleLink,openCart,openCurrency,switchCurrency,currency,data,category, setSelected} = this.props.value
      const { selectedItem } = this.state
      const categoryName = category.charAt(0).toUpperCase() + category.slice(1)
      const item = data && (category === 'clothes' ? data.categories[1].products : category === 'tech' ? data.categories[2].products : data.categories[0].products)
      const items = selectedItem
    return (
      <div className={openCart ? 'main' : ''}>
          {openCart && <CartDropdown value = {{items,currency}}/>}
          {openCurrency && <CurrencyDropdown value = {{switchCurrency:switchCurrency,currency}}/>}
          <div className='main-container' onClick={()=>{ 
            handleLink('',true) 
            switchCurrency('',true)}}>

            <h2>{categoryName}</h2>
            {console.log('item is',item)}
            <div className='item-body'>
              {item.map(element => <Items value = {{element, currency, openCurrency, addItemtoCart:this.addItemtoCart, setSelected}} key={element.id}/>)}
            </div>
          </div>
      </div>
    )
  }
}

export default Category