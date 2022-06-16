import React, { Component } from 'react'
import '../../styles/CartDropdown.css'
import AddedItem from './AddedItem'

class CartDropdown extends Component {
  render() {
     const {items,currency} = this.props.value
     console.log(items)
    return (
      <div className='cart-dropdown'>
        <div className='cart-dropdown-box'>
          {items.length > 0 ? (
            <>
              <h6><b>My Bag</b>, {items.length} items </h6>
              {items.map((element) => {
                console.log('theeee ele is',element)
                return (
                <AddedItem value={{element,currency}} key={element.id} /> 
                )
               })}
            </>
          ) : <p>No Items in Bag!</p>}
        </div>
      </div>
    )
  }
}

export default CartDropdown