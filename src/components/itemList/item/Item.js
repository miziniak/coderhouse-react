import { Link } from 'react-router-dom'

const Item=({nombre, desc, precio, stock, categoria, imagen, id})=>{
    return (
        <div className='item_card'>
            <Link to={`/${categoria}/${id}`}>
            <img src={imagen} alt={nombre} className={'img-producto'} />
            <h2>{nombre}</h2>
            <h4>${precio}</h4>
            </Link>
        </div>

    )
}

export default Item
