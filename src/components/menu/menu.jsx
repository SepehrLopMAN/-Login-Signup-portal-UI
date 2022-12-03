import styles from "./menu.module.css";
import { MenuItem } from "../menu_items/menu_items";
import { items } from "../../data/items";
import React from "react";

const Menu = () => (
  <React.Fragment>
    <div className={styles.container__wrapper}></div>
    <nav className={styles.container__navbar}>
      <ul>
        {items.map((val, ind) => (
          <MenuItem
            btnTitle={val.title}
            bgColor={val.color}
            route_path={val.path}
            key={ind}
          />
        ))}
      </ul>
    </nav>
  </React.Fragment>
);
export default Menu;
