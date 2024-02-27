import { render } from "react-dom";
import { hola } from "./test";
import { Counter } from "./components/Counter";

render(
  <div>
    <Counter />
  </div>,
  document.getElementById("root")
);
