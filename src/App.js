import React, { useState } from "react";
import Choices from "./components/Choices";
import Summary from "./components/Summary";
import Header from "./components/Header";
import { componentType } from "./constants/productList";
import { Components } from "./contexts";
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
    <Components.Provider value={{components, partSelectionHandler}}>
      <Header />
      <div className="content">
        <Choices select={partSelectionHandler} />
        <Summary buy={purchase} />
      </div>
    </Components.Provider>
  );
};

export default App;
