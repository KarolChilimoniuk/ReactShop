import React from "react";
import PropTypes from "prop-types";
import styles from "./SecondHeader.module.css";

const SecondHeader = ({ name }) => {
  return <h2 className={styles.header}>{name}</h2>;
};

SecondHeader.propTypes = {
  name: PropTypes.string
};
export default SecondHeader;
