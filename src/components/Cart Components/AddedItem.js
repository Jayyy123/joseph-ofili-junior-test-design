import React, { Component } from 'react'

class AddedItem extends Component {
  render() {
      const {currency,element} = this.props
    return (
      <div className='carted-item-container'>
          {element.name}
          size: {element.attributes[0].items.size[0]}
      </div>
    )
  }
}

export default AddedItem