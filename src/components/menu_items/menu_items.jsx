import React from "react";
import styles from "./menu_items.module.css";
import { Link } from "react-router-dom";

export function MenuItem({ bgColor, btnTitle, route_path }) {
  return (
    // style is not a string (var + `em`)???
    <li className={styles.menu_item} style={{ backgroundColor: bgColor }}>
      <Link exact="true" to={route_path}>
        {btnTitle}
      </Link>
    </li>
  );
}
