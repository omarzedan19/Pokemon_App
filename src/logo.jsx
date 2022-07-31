import React from 'react';
import pokemonLogo from './pokemonLogo.svg';


export default function LogoComp() {
    return (
    <div className='headerLogo'>
        <img src={pokemonLogo} alt="PokeDex Logo" className='LogoImg'></img>
    </div>
  )
}
