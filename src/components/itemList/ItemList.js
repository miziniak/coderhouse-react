import data from '../../data/data'
import Item from './item/Item'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


const ItemList = ()=>{

    const { categoria } =useParams()
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        if(categoria != null){
            const listaDeProductos=new Promise((res, rej)=>{
                setTimeout(()=>{
                    res(data)
                },3000)
            })
            listaDeProductos.then((data)=>{
                setProductos(data.filter((item)=>item.categoria===categoria))
                setCargando(false)
            })
        } else {
            const listaDeProductos=new Promise((res, rej)=>{
                setTimeout(()=>{
                    res(data)
                },3000)
            })
            listaDeProductos.then((data)=>{
                setProductos(data)
                setCargando(false)
            })
        }
    },[categoria])


    return(
        <>
            {categoria && <h2>{categoria}</h2>}
            <div className='item-container'>
            {cargando ? <h2>CARGANDO PRODUCTOS...</h2> :
            productos.map((producto)=>
                <Item key={producto.id} nombre={producto.nombre} desc={producto.desc} precio={producto.precio} stock={producto.stock} categoria={producto.categoria} id={producto.id} />
            )
            }
            </div>
        </>
    )
}

export default ItemList
