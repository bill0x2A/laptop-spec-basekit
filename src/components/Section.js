import React, { Component, useContext } from "react";
import Option from "./Option";
import { Components } from "../contexts";
import '../globalStyles/main.sass';
import '../globalStyles/normalize.css';

const Section = ({ product, productKey, componentContext = Components}) => {
  const options = Object.entries(product.options);
  let { components, partSelectionHandler } = useContext(componentContext)

  return (
    <div className={"spec-sheet__component"}>
      <h4 className={"component__title"}>{product.name}</h4>
      <ul className={"list--no-style"}>
        {options.map(([itemKey, option]) => (
            <Option
                click={() => partSelectionHandler(productKey, itemKey)}
                item={option}
                key={itemKey}
                selected={components[productKey] === itemKey}
            />
        ))}
      </ul>
    </div>
  );
};

export default Section; 
