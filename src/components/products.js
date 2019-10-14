import React, { Component } from 'react'

export default class products extends Component {
    render() {
        return this.props.items.map((product) => (
            <li key={product.id}>ID: {product.id}<br/>Name: {product.name}<br/> Description: {product.desc}</li>
        ))
    }
}
