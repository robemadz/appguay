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
            this.state.products.map((product, i)=> <Product details={product} key={i} remove={() => this.removeProduct(i)}/>)

        addProduct = (event) => {
            event.preventDefault();
                let name = event.target.elements.name.value
                let price = event.target.elements.price.value
                let brand = event.target.elements.brand.value
                let url = event.target.elements.url.value

                let product = {name,price,brand,url}; // Nuevo JSON

            this.setState({name})
            this.setState({products:[...this.state.products,product]})

            alert(`Producto añadido: ${name} ${price}`)
        }

        removeAllProducts = () => this.setState({name:"--", products:[]})

        removeProduct = (i) => {
            let filteredArray = this.state.products.filter((item, pos) => i !== pos);
            this.setState({products: filteredArray});  
        }
    

        render() {
            return (
            <article>
                <h2>Añade producto</h2>
                <form onSubmit={this.addProduct}>
                    <label>Name:</label><br/>
                    <input type="text" id="name" name="name"/><br/>
                    <label>Price:</label><br/>
                    <input type="number" id="price" name="price"/><br/>
                    <label >Marca:</label><br/>
                    <input type="text" id="brand" name="brand"/><br/>
                    <label >URL:</label><br/>
                    <input type="url" id="url" name="url"/><br/>
                    <input type="submit" value="Enviar"/>
                </form>
                <h2>Lista de productos</h2>
                {this.renderProducts()}
                <button onClick={this.removeAllProducts}>Borrar todo</button>
                <p>Último añadido: {this.state.name}</p>
            </article>
            
        )
    }
}
