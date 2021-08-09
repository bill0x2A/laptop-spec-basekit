import React from "react";
import { products } from "../constants/productList";
import { Components } from "../contexts";
import Section from "./Section";
import '../globalStyles/main.sass';
import '../globalStyles/normalize.css';


const Choices = ({componentContext = Components}) => {
  return (
    <div className="spec-sheet rounded-grey-border">
      <h2>Customisation Choices</h2>
      {Object.entries(products).map(([key, product]) => (
        <Section
            product={product}
            productKey={key}
            key={key}
            componentContext={componentContext}
        />
      ))}
    </div>
  );
};

export default Choices;
