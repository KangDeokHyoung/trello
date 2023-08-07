import React from "react";
import { createRoot } from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";
import "./common/scss/reset.scss";
import "./common/scss/rsuitejs.scss";

import { Provider } from "react-redux";
import { store } from "./store/store";

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// reportWebVitals();

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App tab="home" />);
