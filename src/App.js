import React from 'react';
import './style.css';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { ItemListContainer } from './container/ItemListContainer';
import { ItemDetailContainer } from './container/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { Cart } from './components/Cart';
import { CartFuncion } from './context/CartContext';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <CartFuncion>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting={'Tienda Nike'} />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Route path="/category/:catId">
              <ItemListContainer greeting={'FILTRADO'} />
            </Route>
            <Route path="/item/:id" component={ItemDetailContainer} />
          </Switch>
        </CartFuncion>
      </BrowserRouter>
    </>
  );
}
