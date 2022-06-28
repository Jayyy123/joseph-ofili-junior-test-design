import React, { Component } from 'react'
import { Query } from '@apollo/client/react/components';
import { GET_ALL_PRODUCTS } from './Queries/Queries'

class Categoryy extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        category:'clothes',
        products:[],
      }
    }
    
    
    displayData = (data) => {
        let response;
        data === undefined ? (response = null) : response = data;
        console.log(response)
    }

  render() {
    return <Query query={GET_ALL_PRODUCTS}>
        {({data})=> data && console.log(data.categories)}
    </Query>
    }
}

export default Categoryy