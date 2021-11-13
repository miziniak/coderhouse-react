import ItemCount from "../../itemCount/ItemCount"
import React, {useState, useContext} from "react"
import { Link } from "react-router-dom"
import { Context } from "../../../context/CartContext"

const ItemDetail=({id, nombre, desc, precio, stock, imagen})=>{

    const [buy, setBuy] = useState(false)
    const {onAdd} = useContext(Context)

    const agregar = (props)=>{
        setBuy(true)
        onAdd({id,nombre,precio}, props.unidades)
        alert(`agregaste ${props.unidades} al carrito`)

    }


    return (
        <div className='item_card_detail'>
            <h2>Componente DETAIL</h2>
            <h2>{nombre}</h2>
            <p>{desc}</p>
            <h4>${precio}</h4>
            <img style={{width:"60%"}} src={imagen} alt={nombre} className={'img-producto'}/>
            {!buy ? <ItemCount stock={stock} onAdd={agregar}/> : <Link to='/cart'><button>Terminar compra</button></Link>}
        </div>

    )
}

export default ItemDetail
