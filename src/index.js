import React from "react";
import ReactDOM from "react-dom";

import Accordion from "./Accordion";

import "./styles.css";

function App() {
  return (
    <div className="App" style={{ width: "500px", margin: "20px auto" }}>
      <div> test me 2 removed </div>
      <Accordion>
        <div title="Contact Us" index="1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </Accordion>
      <hr />
      <Accordion>
        <div title="How is my pension invested?" index="1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div title="How much can I pay to my pension" index="2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </div>
      </Accordion>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
