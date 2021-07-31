import React from "react";
import { products } from "../constants/productList";
import "../globalStyles/main.sass";
import "../globalStyles/normalize.css";

const Summary = ({ components, buy }) => {
  const chosenParts = Object.entries(components).map(
    ([type, key]) => products[type].options[key]
  );

  const totalPrice = chosenParts.reduce(
    (total, current) => total + current.price,
    0
  );

  return (
    <div className={"summary-window rounded-grey-border"}>
      <h2>Summary</h2>
      <div className={"summary-window__chosen-specs"}>
        <ul className={"chosen-specs__spec-list list--no-style"}>
          {chosenParts.map((part) => (
            <li className={"spec-list__spec"} key={part.name}>
              {part.name}
            </li>
          ))}
        </ul>
      </div>
      <span className={"summary-window__total"}>
        Total Price : £{totalPrice}
      </span>
      <button className={"buy-button clickable selected"} onClick={buy}>
        Buy Now
      </button>
    </div>
  );
};

export default Summary;
