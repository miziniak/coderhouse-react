import React from 'react';

const ItemListContainer = (props) =>{
  return(
    <h1 className="title">{props.title ?? 'Welcome to the store!'}</h1>
  );
};

export default ItemListContainer;
