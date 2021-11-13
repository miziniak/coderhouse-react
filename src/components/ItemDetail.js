import React, { useState, useContext } from 'react';
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { Context } from "../context/CartContext"

export const ItemDetail = ({ id, name, image, price, description, stock}) => {
    const [buy, setBuy] = useState(false);
    const {onAdd} = useContext(Context);

    const agregar = (props)=>{
        setBuy(true)
        onAdd({id,name,price}, props.unidades)
        alert(`agregaste ${props.unidades} al carrito`)

    }

    return (
      <div className='item_card_detail'>
        <img src={image} alt={name} className={'img-producto'} />
        <h3>{name}</h3>
        <p>{price} €</p>
        <p>{description}</p>
        {!buy ? <ItemCount stock={stock} onAdd={agregar} /> : <Link to='/cart'><button>Terminar Compra</button></Link>}
      </div>
  )
}

export default ItemDetail
