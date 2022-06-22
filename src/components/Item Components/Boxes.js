import React, { Component } from 'react'

class Boxes extends Component {
  render() {
      const { element, color, selected } = this.props.value
    return (
        <>
            {
                color ? <div style={{backgroundColor:element}}></div> :  <div className={selected ? 'selected-box' : ''} >{element}</div> 
            }
        </>

    )
  }
}

export default Boxes