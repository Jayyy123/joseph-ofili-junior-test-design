import React, { Component } from 'react'

class Gallery extends Component {

    render() {
      const { element } =  this.props.value;
      console.log('the element is come on',element)
    return <img className='gallery-subs' src={element} alt='gallery' />
  }
}

export default Gallery