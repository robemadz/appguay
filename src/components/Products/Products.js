import React, { Component } from 'react'
import Product from '../Product/Product'
import data from '../../data.json'

export default class Products extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                name:"--",
                 products:data //va a ser un array de json. Si no quiero una precarga, pondría products:[]
            }
        }
        

        renderProducts = () =>
            this.state.products.map((product, i)=> <Product details={product} key={i}/>)

        addProduct = () => {
            let name = prompt("Introduce nombre")
            let price = prompt("Introduce precio")

            let product = {name,price}

            this.setState({name})
            this.setState({products:[...this.state.products,product]})

            alert(`Producto añadido: ${name} ${price}`)
        }

        removeAllProducts = () => this.setState({name:"--", products:[]})
    

        render() {
            return (
            <article>
                {this.renderProducts()}
                <button onClick={this.addProduct}>Añadir producto</button>
                <button onClick={this.removeAllProducts}>Borrar todo</button>
                <p>Último añadido: {this.state.name}</p>
            </article>
            
        )
    }
}
