import React from "react";
import FirstHeader from "../FirstHeader/FirstHeader";
import SecondHeader from "../SecondHeader/SecondHeader";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import styles from "./HomePage.module.css";
import products from "../../products/products";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <FirstHeader name="Welcome to our page" />
      <SecondHeader name="Desktops" />
      <div className={styles.products}>
        {products.map(product => {
          if (product.featured === true && product.category === "desktop") {
            return (
              <Product
                src={product.image}
                price={product.amount}
                name={product.name}
              />
            );
          }
        })}
      </div>
      <SecondHeader name="Tablets" />
      <div className={styles.products}>
        {products.map(product => {
          if (product.featured === true && product.category === "tablet") {
            return (
              <Product
                src={product.image}
                price={product.amount}
                name={product.name}
              />
            );
          }
        })}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
