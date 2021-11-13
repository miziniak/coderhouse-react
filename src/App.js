import React from 'react';
import './style.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ItemListContainer } from './container/ItemListContainer';
import { ItemDetailContainer } from './container/ItemDetailContainer';
import { NavBar } from './components/NavBar';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting={'Tienda Nike'} />
          </Route>
          <Route path="/category/:catId">
            <ItemListContainer greeting={'FILTRADO'} />
          </Route>
          <Route path="/item/:id" component={ItemDetailContainer} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
