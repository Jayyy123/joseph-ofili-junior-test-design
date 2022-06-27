import './App.css';
import Header from './components/Header Component/Header';

import React, { Component } from 'react'
import { Query } from '@apollo/client/react/components';
import { GET_ALL_PRODUCTS } from './graphql/Queries/Queries';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PDP from './components/PDP';
import PLP from './components/PLP';
import Cart from './components/Cart';
import CartPage from './components/Cart Components/CartPage';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      selected:'all',
      success:false,
      link:'all',
      openCart:false,
      currency:'$',
      openCurrency:false,
      category:'all',
      update:false,
      selectedElement:[],
      selectedItem:[],
    }
  }

  showSuccess = () => {
    setTimeout(() => {
      this.setState({success:false})
    },2000)
  }

  checkIfInCart = (item) => {
    const {selectedItem} = this.state

    for(var i = 0; i < selectedItem.length; i++){
      if(selectedItem[i].item.id === item.id){
        return i;
      }
    }
    return -1;
  }

  addItemtoCart = (item,reduce=false,remove=false) => {
    const {selectedItem} = this.state
    const newItems = [...selectedItem]

    const index = this.checkIfInCart(item)
    console.log(index)

    if(index > -1){

      if(remove){
        let items = selectedItem
        items.splice(index,1)
        this.setState({selectedItem:items,success:true})
      }

      if(reduce){
        let addedId = selectedItem[index].addedId;
        addedId > 0 && (addedId -= 1)
        let items = selectedItem
        items[index].addedId = addedId
        this.setState({selectedItem:items})
      }else{
        let addedId = selectedItem[index].addedId + 1
        let items = selectedItem
        items[index].addedId = addedId
        this.setState({selectedItem:items})
      }
      
    }else{
      const newItem = {
        item,
        addedId:1,
        color:'black',
      }
      newItems.push(newItem)
      this.setState({selectedItem:newItems,success:true})
    }

    console.log(index,'item ===> ===>',item)
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
    const { selected, openCart, currency, openCurrency, category,update, selectedElement,selectedItem, success} = this.state;
    const packages = {selected,handleLink:this.handleLink,openCart,currency,switchCurrency:this.switchCurrency,openCurrency, category,update, cancelUpdate:this.cancelUpdate, selectedElement, setSelected:this.setSelected,selectedItem,"addItemtoCart":this.addItemtoCart,"checkIfInCart":this.checkIfInCart}
    if(success){
      this.showSuccess()
    }

    return (
      <Query query={GET_ALL_PRODUCTS}>
          {({data})=> {
            data && (packages.data = data);
            return (     
              <Router>
                <div className="App">
                  <Header value={packages}/>
                  {success && <h1 className='success'>✅ Success!</h1>}
                  <Routes>
                    <Route path='/' element = {<PLP value={packages}/>} />
                    <Route path='/pdp' element = {<PDP value={packages}/>}/>
                    <Route path='/cart' element = {<Cart value={packages}/>} />
                    <Route path='/view' element = {<CartPage value={packages}/>} />
                  </Routes>
                </div>
              </Router>
        )}}
      </Query>
    )
  }
}

export default App;
