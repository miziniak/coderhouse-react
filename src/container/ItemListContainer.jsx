import React, {useState, useEffect} from 'react';
import ItemList from '../components/ItemList';
import data from '../data/data';


const ItemListContainer = (props) =>{

  const [productos, setProductos] = useState('')
  const [cargando, setCargando] = useState(true)

  useEffect(()=>{
    const listaDeProductos=new Promise ((res, rej)=>{
      setTimeout(()=>{
        res(data)
      },3000)
    })
    listaDeProductos.then((data)=>{
      setProductos(data)
      setCargando(false)
    })
  },[])

  return(
    <div className='main-container'>
      <h1>{props.title ?? 'Welcome to the store!'}</h1>
      <div className='item-container'>
        {cargando ? <h1>Cargando productos...</h1> : <ItemList productos={productos}/>}
      </div>
    </div>
  );
};

export default ItemListContainer;
