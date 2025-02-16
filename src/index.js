import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./components/App";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById("foot"));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
