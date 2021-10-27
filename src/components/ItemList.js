import React from 'react';
import Item from '../components/Item';

const ItemList=({productos})=>{
  return(
    <>
      {productos.map((producto)=>
        <Item key={producto.id} nombre={producto.nombre} categoria={producto.categoria} precio={producto.precio} imagen={producto.imagen} />
      )}
    </>
  )
}

export default ItemList;
