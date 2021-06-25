import React, { Component } from 'react'
import Product from '../Product/Product'

export default class Products extends Component {
    render() {

        let data = [{name:"botella", price:"10"},
        {name:"cosa", price:"3"},
        {name:"Silla", price:"20"},
        {name:"queso", price:"4"}]
return (
<article>
    <Product details={data[0]}/>
    <Product details={data[1]}/>
    <Product details={data[2]}/>
    <Product details={data[3]}/>
</article>
)
}
}