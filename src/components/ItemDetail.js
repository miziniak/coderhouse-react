import React from 'react';

export const ItemDetail = ({ id, name, image, price, description }) => {
  return !id ? (
    <h1>EL ITEM NO EXISTE</h1>
  ) : (
    <>
      <div className='item_card_detail'>
        <img src={image} alt={name} className={'img-producto'} />
        <h3>{name}</h3>
        <p>{price} €</p>
        <p>{description}</p>
      </div>
    </>
  );
};
