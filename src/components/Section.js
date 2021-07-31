import React from "react";
import Option from "./Option";
import '../globalStyles/main.sass';
import '../globalStyles/normalize.css';

const Section = ({ product, select, productKey, components }) => {
  const options = Object.entries(product.options);
  return (
    <div className={"spec-sheet__component"}>
      <h4 className={"component__title"}>{product.name}</h4>
      <ul className={"list--no-style"}>
        {options.map(([itemKey, option]) => (
            <Option
                click={() => select(productKey, itemKey)}
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
