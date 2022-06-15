import React, { Component } from 'react'
import logo from "../../images/a-logo.png"
import cart from "../../images/cart.png"
import dArrow from "../../images/chevron-down.png"
import uArrow from "../../images/chevron-up.png"
import '../../styles/Header.css'

class Header extends Component {
  render() {
      const {selected,openCart,handleLink,currency,switchCurrency,openCurrency} = this.props.value;
    return (
      <div className='header'>
          <div className='navbar-container'>
              <div className='navbar-left'>
                  <li onClick={()=>handleLink('all')} className={ selected === '' ? '' : selected === 'all' ? 'selected' : ''} >ALL</li>
                  <li onClick={()=>handleLink('clothes')} className={ selected === '' ? '' : selected === 'clothes' ? 'selected' : ''}>CLOTHES</li>
                  <li onClick={()=>handleLink('tech')} className={ selected === '' ? '' : selected === 'tech' ? 'selected' : ''}>TECH</li>
              </div>
              <div className='navbar-middle'>
                <img src={logo} alt="Logo" />
              </div>
              <div className='navbar-right'>
                  <div  onClick={()=> openCurrency ? switchCurrency('',true,false) : switchCurrency('',false,true)}> {currency} <img src={openCurrency ? uArrow : dArrow} alt="Arrow"/> </div>
                  <img onClick={()=> openCart ? handleLink('',true) : handleLink('cart')} src={cart} alt="Cart" />
              </div>
          </div>
      </div>
    )
  }
}

export default Header