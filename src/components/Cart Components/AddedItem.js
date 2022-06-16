import React, { Component } from 'react'

class AddedItem extends Component {
  render() {
      const {currency,element} = this.props.value
      console.log('element is ',element)
    return (
      <div className='carted-items'>
          <img src = {element.gallery[0]} alt='gallery' />
          <div className='carted-item-container'>
            {element.name}<br/>
            size: {element.attributes[0].items[0].value}  
          </div>
      </div>
    )
  }
}

export default AddedItem