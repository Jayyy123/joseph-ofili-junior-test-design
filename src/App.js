import './App.css';
import Header from './components/Header Component/Header';

import React, { Component } from 'react'
import Category from './components/PLD Components/Category';
import { Query } from '@apollo/client/react/components';
import { GET_ALL_PRODUCTS } from './graphql/Queries/Queries';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PDP from './components/PDP';
import PLP from './components/PLP';
import Cart from './components/Cart';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      selected:'all',
      link:'all',
      openCart:false,
      currency:'$',
      openCurrency:false,
      category:'all',
      update:false,
      selectedElement:[],
    }
  }

  handleLink = (link,close = false) => {
    (link && this.state.openCart === false && link !== 'cart') && this.setState({selected:link,link:link,category:link})
    link === 'cart' && this.setState({openCart:true,openCurrency:false})
    if (close === true) this.setState({openCart:false})
  }

  switchCurrency = (currency,close = false,open=false)=> {
    open && this.setState({openCurrency:true,openCart:false})
    close && this.setState({openCurrency:false})
    currency && this.setState({currency,openCurrency:false,update:true})
  }

  cancelUpdate = () => {
    this.setState({update:false})
  }

  setSelected = (value) => {
    console.log('======>',value, this.state.selectedElement)
    value !== undefined && this.setState({selectedElement:[value]})
  }

  render() {
    const { selected, openCart, currency, openCurrency, category,update, selectedElement} = this.state;
    const packages = {selected,handleLink:this.handleLink,openCart,currency,switchCurrency:this.switchCurrency,openCurrency, category,update, cancelUpdate:this.cancelUpdate, selectedElement, setSelected:this.setSelected}
    // console.log(packages.data)
    return (
      <Query query={GET_ALL_PRODUCTS}>
          {({data})=> {
            data && (packages.data = data);
            return (     
              <Router>
                <div className="App">
                  <Header value={packages}/>
                  <Routes>
                    <Route path='/' element = {<PLP value={packages}/>} />
                    <Route path='/pdp' element = {<PDP value={packages}/>}/>
                    <Route path='/cart' element = {<Cart value={packages}/>} />
                  </Routes>
                </div>
              </Router>
        )}}
      </Query>
    )
  }
}

export default App;