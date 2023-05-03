import React from "react";
import { ReactDOM } from "react";
import App from "./App";
import Store from "./Redux/Store";
import { Provider } from "react-redux";

ReactDOM.render(
    <React.StrictMode>
    <Provider Store={Store}>  
        <App/>
    </Provider>
    </React.StrictMode>,
    document.getElementById("root")
)