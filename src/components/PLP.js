import React, { Component } from 'react'
import Category from './PLD Components/Category'

class PLP extends Component {
  render() {
      const {value} = this.props
    return (
      <div>
          {value.data && <Category value={value} />}
      </div>
    )
  }
}

export default PLP