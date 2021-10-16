import React from 'react';
import CartWidget from '../components/CartWidget';

export const NavBar = () => {
  return(
    <>
    <div className="NavBarSection">
    <h3>STORE</h3>
    <ul className="List">
      <li><a href=""><p>Home</p></a></li>
      <li><a href=""><p>Categoría 1</p></a></li>
      <li><a href=""><p>Categoría 2</p></a></li>
      <li><a href=""><p>Categoría 3</p></a></li>
      <li><a href=""><p>Categoría 4</p></a></li>
    </ul>
    <CartWidget />
    </div>
    </>
  );
};

export default NavBar;
