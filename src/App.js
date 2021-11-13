import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemList from './components/itemList/ItemList';
import React from 'react'
import {CartFuncion} from './context/CartContext'
import Cart from './components/cart/Cart';

function App() {
  return (
    <BrowserRouter>
    <CartFuncion>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer titulo='Tienda Nike' />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/:categoria/" exact>
            <ItemList titulo='Juegos' subtitulo='Tienda consolas retro' />
          </Route>
          <Route path="/:categoria/:id" exact>
            <ItemDetailContainer titulo='Juegos' subtitulo='Tienda consolas retro' />
          </Route>
        </Switch>
      </div>
      </CartFuncion>
    </BrowserRouter>
  );
}

export default App;
