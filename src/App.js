import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import Products from './components/products';


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
    ]
  }
  render() {
    return (
      <div>
        <Header/>        
        <h2>{this.state.siteTitle}</h2>
        <h3>Products</h3>
        <Products items={this.state.products}/>
      </div>
    )
  }
}
export default App;
