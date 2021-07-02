import React, { Component } from 'react';
import axios from 'axios';
import './Staff.css';
import PokemonsApi from '../PokemonsApi'


  class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = { pokeLista: [] }
        console.log('CONSTRUCTOR')
    }

    async componentDidMount() {

      setTimeout(async ()=> { 
        
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon');

            this.setState({
                pokeLista: res.data.results
            })
            console.log('componentDidMount');
    
    }, 2000)

            
    }
    

  
    render() {
      console.log('RENDER')
      return (
          <>
          <h2> Lista de staff</h2>
          <PokemonsApi lista={this.state.pokeLista}></PokemonsApi>
          </>
      );
  }
}

export default Staff;