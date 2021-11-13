import ItemList from '../itemList/ItemList'
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer'
import React from 'react'



const ItemListContainer=(props)=>{

    return(
        <>
            <h1 style={{ textAlign: 'center' }}>{props.titulo}</h1>
            {/*<ItemCount stock='0' />*/ }
            {/*<ItemCount stock='5' />*/}
            <ItemList/>
            {/*<ItemDetailContainer />*/}
        </>
    )
}

export default ItemListContainer
