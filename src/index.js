import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Accordion from "./Accordion";
import "./styles.css";

function App() {
  return (
    <div className="App" style={{ width: "500px", margin: "20px auto" }}>
      <Accordion>
        <div header="Contact Us" index="1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it toddd make a type specimen book.
        </div>
      </Accordion>
      <hr />
      <Accordion>
        <div header="How is my pension invested..?" index="1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>

        <div header="How much can I pay to my pension" index="2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </Accordion>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
