import React from "react";
import { products } from "../constants/productList";
import Section from "./Section";
import '../globalStyles/main.sass';
import '../globalStyles/normalize.css';


const Choices = ({ select, components }) => {
  return (
    <div className="spec-sheet rounded-grey-border">
      <h2>Customisation Choices</h2>
      {Object.entries(products).map(([key, product]) => (
        <Section
            product={product}
            select={select}
            productKey={key}
            components={components}
            key={key}
        />
      ))}
    </div>
  );
};

export default Choices;
