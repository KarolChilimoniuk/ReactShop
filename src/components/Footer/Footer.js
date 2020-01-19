import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__paragraph}>
        Shop © 2020
        <br />
        Coded by Karol
      </p>
    </footer>
  );
};

export default Footer;
