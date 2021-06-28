import React, { Component } from 'react'
import './Product.css'

export default class Product extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             brand:"Fictizia S.A",
             url: "https://paellasdomicilio.com/wp-content/uploads/2019/11/jamon-serrano.png"
        }
    }
    

    render() {
        let {name,price,brand,url} = this.props.details
        return (
            <section>
                <div>
                    <h3>OFERTA</h3>
                    <p>Producto:{name}</p>
                    <p>Precio: {price} €</p>
                    <p>Marca: { brand || this.state.brand }</p>
                    <img class="img" src={url || this.state.url} alt=""/>
                    <button onClick={this.props.remove}>Borrar</button>
                </div>    
            </section>
        )
    }
}
