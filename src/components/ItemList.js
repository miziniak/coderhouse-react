import React from 'react';
import { Item } from '../components/Item';

export const ItemList = ({ items }) => {
  return (
    <section className="flex-row">
      {items?.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </section>
  );
};
