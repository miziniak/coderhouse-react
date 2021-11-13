import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ id, name, category, image, price }) => {
  return (
    <Link to={`/item/${id}`}>
      <div className={`item_card ${category}-category`}>
        <img src={image} alt={name} className={'img-producto'} />
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{price} €</p>
      </div>
    </Link>
  );
};
