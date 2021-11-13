import React from 'react';
import { NavLink, Link } from 'react-router-dom';


export const NavBar = () => {
  const categories = [
    { id: 'asfadd', address: '/', text: 'All' },
    { id: '123asf', address: '/category/Lifestyle', text: 'Lifestyle' },
    { id: 'sgs3q3', address: '/category/Gym-Training', text: 'Gym & Training' },
    { id: 'gkl98s', address: '/category/Top-Zapatillas-Nike', text: 'Top Zapatillas Nike' },
  ];

  return (
    <section className="NavBarSection">
      <h3 className="logo">STORE</h3>
      {categories.map((cat) => {
        return (
          <div className="links" key={cat.id}>
            <NavLink to={cat.address} exact activeClassName="activeClass">
              {cat.text}
            </NavLink>
          </div>
        );
      })}
    </section>
  );
};
