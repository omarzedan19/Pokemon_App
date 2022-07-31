import React, { useState, useEffect , Button } from 'react';
import ModalUser from './Modal/ModelUser';

import './style.css';



function Card({ pokemon }) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
return (
        <div className="Card">
      
       <Button variant="primary" onClick={handleShow}>Add new</Button>
      <ModalUser message="hei you" show={show} header="info" setShow={setShow} /> 
     
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title"></p>
                    <p></p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title"></p>
                    <p></p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title"></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default Card;
