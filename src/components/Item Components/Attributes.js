import React, { Component } from 'react'
import Boxes from './Boxes'

class Attributes extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         selected:false
      }
    }

    setSelected = () => {
      const { selected } = this.state;
      this.setState({selected:!selected})
    }


  render() {
      const { element,defaults } = this.props.value;
      const { selected } = this.state;
      const color = element.name === 'Color' ? true : false

      console.log('the atrributes element is', element)
    return (
        <>
            <p className='size'>{element.name}:</p>
            <div className='boxes' >
                {element.items.map((element) => <Boxes  key={element.id} value={{"element":element.displayValue,color, defaults ,selected,'setSelected':this.setSelected}}/>  )}
            </div>
        </>
    )
  }
}

export default Attributes