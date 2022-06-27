import React, { Component } from 'react'
import { sizeTags } from '../../utils/helpers'

class Boxes extends Component {

  render() {
      const { element, color, selected } = this.props.value
    return (
        <>
            {
                color ? <div className='colored-boxes' style={{backgroundColor:element}}></div> :  <div className={selected ? 'selected-box' : ''} >{ element.charAt(0) === '4' && element.length < 3  ? sizeTags(element) : element}</div> 
            }
        </>

    )
  }
}

export default Boxes