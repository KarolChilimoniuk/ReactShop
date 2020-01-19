import React from "react";
import FirstHeader from "../FirstHeader/FirstHeader";
import Footer from "../Footer/Footer";
import products from "../../products/products";
import Product from "../Product/Product";
import styles from "./Catalog.module.css";

class Catalog extends React.Component {
  constructor() {
    super();
    this.state = {
      manufacture: "all"
    };
  }

  render() {
    const handleChange = e => {
      console.log(this.setState.value);
      this.setState({
        manufacture: e.target.value
      });
    };

    const handleClickClear = e => {
      console.log("click");
      this.setState({
        manufacture: "all"
      });
    };

    const manufacturers = [
      ...new Set(
        products.map(manuf => {
          return manuf.manufacture;
        })
      )
    ];

    const handleClickFilter = e => {
      console.log(e.target.value);
      this.setState({
        manufacture: e.target.value
      });
    };

    const Inputs = manufacturers.map(el => {
      return (
        <div className={styles.filter_input}>
          <input
            id={el}
            type="radio"
            name="manufacturer"
            value={el}
            onChange={handleClickFilter}
          />
          <label for={el}>{el}</label>
        </div>
      );
    });

    const productsToShow = products.filter(product => {
      return product.manufacture === this.state.manufacture;
    });

    return (
      <div className={styles.container}>
        <FirstHeader name="Catalog" />
        <div className={styles.product_container}>
          <div className={styles.column_left}>
            <div clasName={styles.search_clear}>
              <h4 className={styles.header}>Search</h4>
              <input
                type="text"
                placeholder="search"
                onChange={handleChange}
              ></input>
              <button
                href="#"
                onClick={handleClickClear}
                className={styles.clear__button}
              >
                Clear
              </button>
            </div>
            <div className={styles.filter_inputs}>
              <h4 className={styles.header}>Manufacturers</h4>
              <div className={styles.filter_inputs}>
                <div className={styles.filter_input}>
                  <input
                    id="all"
                    type="radio"
                    name="manufacturer"
                    value="all"
                    onChange={handleClickFilter}
                  />
                  <label for="all">All</label>
                </div>
                {Inputs}
              </div>
            </div>
          </div>
          <div className={styles.column_right}>
            {this.state.manufacture === "all"
              ? products.map(el => (
                  <Product src={el.image} price={el.amount} name={el.name} />
                ))
              : productsToShow.map(el => (
                  <Product src={el.image} price={el.amount} name={el.name} />
                ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Catalog;
