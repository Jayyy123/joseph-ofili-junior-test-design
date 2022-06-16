import React, { Component } from 'react'
import '../styles/PDP.css'
import { removeTags } from '../utils/helpers'

class PDP extends Component {
  render() {
    const { selectedElement } = this.props.value
    console.log('current element for description is..',selectedElement[0].name)
    const name = selectedElement[0].name,
          description = selectedElement[0].description,
          gallery = selectedElement[0].gallery[0]
    return (
      <div className='pdp'>
        <img src={gallery} alt='GALLERY' />
        <div className='text'>
          <h3>{name}</h3>
          <p> {removeTags(description)} </p>
        </div>
      </div>
    )
  }
}

export default PDP