import React from "react";
import { Data } from '../helpers/Data';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';
// import { useState } from "react";

export const Menu = () => {
  // const [cart, setCart] = useState([]);

  // const addToCart = (menuItem) => {
  //   setCart([...cart, menuItem]);
  // };

  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItem, key) => (
          <div key={key}>
            <MenuItem
              image={menuItem.image}
              name={menuItem.id}
              content={menuItem.content}
              price={menuItem.price}
            />
            
          </div>
        ))}
      </div>
    </div>
  );
};
