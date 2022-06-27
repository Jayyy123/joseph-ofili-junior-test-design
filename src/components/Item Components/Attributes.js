import React, { Component } from 'react'
import Boxes from './Boxes'
import Prices from './Prices';

class Attributes extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         selected:false
      }
    }
  render() {
      const { element } = this.props.value;
      const { selected } = this.state;
      const color = element.name === 'Color' ? true : false
      const defaultColor = element.color
      console.log('the atrributes element is', element)
    return (
        <>
            <p className='size'>{element.name}:</p>
            <div className='boxes' onClick={()=>this.setState({selected:!selected})}>
                {element.items.map((element) => <Boxes  key={element.id} value={{"element":element.displayValue,color, selected}}/>  )}
            </div>
        </>
    )
  }
}

export default Attributes