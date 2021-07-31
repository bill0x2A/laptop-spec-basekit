import React from "react";
import '../globalStyles/main.sass';
import '../globalStyles/normalize.css';

const Option = ({ selected, item, click }) => {
  let style = [
    "component-options__component-option",
    "clickable",
    "rounded-grey-border",
  ];
  if (selected) {
    style.push("selected");
  }
  style = style.join(" ");
  return (
    <li className={style} onClick={click} key={item.name}>
      <span className="component-option__name">{item.name}</span>
      <span className="component-option__price">£{item.price}</span>
    </li>
  );
};

export default Option;