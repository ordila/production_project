import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { render } from "react-dom";

render(
  <BrowserRouter>
    <div>
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
