import React, { useState, Fragment } from "react";
import Choices from "./components/Choices";
import Summary from "./components/Summary";
import Header from "./components/Header";
import { componentType } from "./constants/productList";
import "./globalStyles/normalize.css";
import "./globalStyles/main.sass";

const App = () => {
  const [components, setComponents] = useState({
    [componentType.SCREEN]: "13-retina",
    [componentType.CPU]: "quad-i7-27-base",
    [componentType.STORAGE]: "512-ssd",
    [componentType.MEMORY]: "8gb-mem",
    [componentType.GPU]: "rad-pro-455",
  });

  const partSelectionHandler = (type, id) => {
    setComponents({
      ...components,
      [type]: id,
    });
  };

  const purchase = async () => {
    console.log("Running purchase code with:");
    console.dir(components);
  };

  return (
    <Fragment>
      <Header />
      <div className="content">
        <Choices components={components} select={partSelectionHandler} />
        <Summary components={components} buy={purchase} />
      </div>
    </Fragment>
  );
};

export default App;
