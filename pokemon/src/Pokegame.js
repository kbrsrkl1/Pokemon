import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
    ],
  };

  render() {
    let handEl = [];
    let handE = [...this.props.pokemon];

    while (handEl.length < handE.length) {
      let randIdx = Math.floor(Math.random() * handE.length); 
      let randomPokemon = handE.splice(randIdx, 1)[0];
      handEl.push(randomPokemon);
    }

    let exp1 = handEl.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = handE.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
      <div>
        <Pokedex pokemon={handEl} exp={exp1} isWinner={exp1 > exp2} /> 
        <Pokedex pokemon={handE} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default Pokegame;
