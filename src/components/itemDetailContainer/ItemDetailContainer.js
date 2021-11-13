import data from '../../data/data'
import ItemDetail from './itemDetail/ItemDetail'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ()=>{

    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)

    const {id} = useParams()


    useEffect(()=>{
        const Producto=new Promise((res, rej)=>{
            setTimeout(()=>{
                res(data)
            },3000)
        })
        Producto.then((data)=>{
            setProducto(data.find((item)=>item.id===id))
            setCargando(false)
        })
    },[id])


    return(
        <div className='detail-container'>
        {cargando ? <h2>CARGANDO PRODUCTO...</h2> : 
            <ItemDetail id={producto.id} nombre={producto.nombre} desc={producto.desc} precio={producto.precio} stock={producto.stock} imagen={producto.image} />
        }
        </div>

    )
}

export default ItemDetailContainer