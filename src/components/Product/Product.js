import React from "react";
import PropTypes from "prop-types";
import styles from "./Product.module.css";

const Product = ({ src, price, name }) => {
  return (
    <div className={styles.product}>
      <img src={src} alt="" className={styles.product__image} />
      <p className={styles.product__price}>{price}</p>
      <h3 className={styles.product__header}>{name}</h3>
    </div>
  );
};

Product.propTypes = {
  src: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string
};

export default Product;
