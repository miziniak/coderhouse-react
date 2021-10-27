import React from 'react';

const Item = ({nombre, categoria, precio, imagen}) => {
  return(
      <div className='item-card'>
        <img className='img-producto' src={imagen}/>
        <h3>{nombre}</h3>
        <p>{categoria}</p>
        <p>{precio}€</p>
      </div>
  );
};

export default Item;
