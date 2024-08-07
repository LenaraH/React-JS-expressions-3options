import React from "react";
import ReactDOM from "react-dom";

const fName = "Lenara";
const lName = "Honkanen";
const number = 10;

ReactDOM.render(
  <div>
    <h1>Hello, {fName + " " + lName}</h1> {/*option 1*/}
    <h1>
      Hi, {fName} {lName}
    </h1>{" "}
    {/*option 2*/}
    <h1>Good evening, {`${fName} ${lName}`}!</h1> {/*option 3, ES6*/}
    <p>Your lucky number is {Math.floor(Math.random() * 12)}.</p>
  </div>,
  document.getElementById("root")
);
