import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import Products from './components/products';

var {btnStyle} = require('./styles.js');

class App extends Component {
  state = {
    siteTitle: 'This is a site title',
    products: [
      {
        id:10,
        name: 'Product Name',
        desc: 'this is product description'
      },
      {
        id:11,
        name: 'Product Name 2',
        desc: 'this is product description'
      },
      {
        id:12,
        name: 'Product Name 3',
        desc: 'this is product description'
      },
      {
        id:13,
        name: 'Product Name 4',
        desc: 'this is product description'
      },
    ],
    inputtext: '',
    showProduct: false,
  }
  testHandel = (e) => {

    this.setState({inputtext:e.target.value});
    console.log(this.state.inputtext);
  }
  showProduct = (e) => {
    this.setState({showProduct:true});
  }
  render() {
    var showProductMarkup = '';
    if(this.state.showProduct=== true) {
      showProductMarkup =  <Products items={this.state.products}/>
    }
    return (
      <div>
        <Header/>        
        <h2>{this.state.siteTitle}</h2>
        <h3>Products</h3>        

        <form action="">
          <input type="text" placeholder="Name" onChange={this.testHandel}/>
        </form>
        <button onClick={this.showProduct} style={btnStyle}>Show Product</button>
        {showProductMarkup}
      </div>
    )
  }
}

export default App;
