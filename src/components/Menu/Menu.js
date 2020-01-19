import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.navigation__container}>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__element}>
            <NavLink to="/" className={styles.navigation__link}>
              Home
            </NavLink>
          </li>
          <li className={styles.navigation__element}>
            <NavLink to="/catalog" className={styles.navigation__link}>
              Catalog
            </NavLink>
          </li>
          <li className={styles.navigation__element}>
            <NavLink to="/about" className={styles.navigation__link}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
