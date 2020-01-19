import React from "react";
import PropTypes from "prop-types";
import style from "./FirstHeader.module.css";

const FirstHeader = ({ name }) => {
  return <h1 className={style.firstHeader}>{name}</h1>;
};

FirstHeader.propTypes = {
  name: PropTypes.string
};

export default FirstHeader;
