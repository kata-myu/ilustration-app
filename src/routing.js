import React, {useState} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./pages/App";
import Content from "./pages/Content";

const Routing = () => {

  return(
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/content" component={Content} />
    </BrowserRouter>
  );
}

export default Routing;