import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Portfolio from "./newPort/components/Portfolio";

ReactDOM.render(<Portfolio />, document.getElementById("root"));

serviceWorker.register();
