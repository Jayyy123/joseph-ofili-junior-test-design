import React, { Component } from 'react'
import { sizeTags } from '../../utils/helpers'

class Boxes extends Component {

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

 componentDidMount = () => {
    const { element, defaults } = this.props.value
    defaults.size === sizeTags(element) && this.setSelected()
    defaults.color === element && this.setSelected()
    defaults.answer === element && this.setSelected()
    console.log("99999",element,defaults.color, defaults.answer,this.state.selected)
 }

  render() {
      const { element, color } = this.props.value
      const { selected } = this.state
    return (
        <>
            {
                color ? <div onClick={()=>this.setSelected()} style={selected ? {backgroundColor:element,border:"2px solid green"} : {backgroundColor:element}}></div> :  <div onClick={()=>this.setSelected()} className={selected ? 'selected-box' : ''} >{ element.charAt(0) === '4' && element.length < 3  ? sizeTags(element) : element}</div> 
            }
        </>

    )
  }
}

export default Boxes