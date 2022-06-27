import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/CartDropdown.css'
import AddedItem from './AddedItem'

class CartDropdown extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       total:''
    }
  }

  componentDidMount = () => {
    const {items,currency} = this.props.value
    // console.log('hello =======', items.reduce((total,current) => {
    //   console.log('total is',total,'current is',current, 'filtered', current.prices.filter(element => element.currency.symbol === currency) )
    //   return parseInt(current.prices.filter(element => element.currency.symbol === currency)[0].amount) + total
    // },0))
    const total = currency + items.reduce((total,current) => {
      return parseInt(current.prices.filter(element => element.currency.symbol === currency)[0].amount) + total
    },0)

    this.setState({total})

  }

  render() {
     const {items,currency} = this.props.value
     const { total } = this.state
    return (
      <div className='cart-dropdown'>
        <div className='cart-dropdown-box'>
          {items.length > 0 ? (
            <>
              <h6><b>My Bag</b>, {items.length} items </h6>
              <div className='added'>
              {items.map((element) => {
                console.log('theeee ele is',element)
                return (
                    <AddedItem value={{element,currency}} key={element.id} /> 
                    )
                  })}
                  </div>
               <div className='cart-total'>
                 <h4 className='tot'>Total:</h4>
                 <h4>{total}</h4>
               </div>
                <div className='buttons'>
                  <Link to={'/view'} className='view-bag-link'> <button type="submit" className='view-bag'> View Bag </button> </Link>
                  <Link to={'/view'} className='view-bag-link'> <button type="submit" className='checkout-bag'>Checkout</button> </Link>
                </div>
            </>
          ) : <p>No Items in Bag!</p>}
        </div>
      </div>
    )
  }
}

export default CartDropdown