import React from "react";
import ReactDOM from "react-dom";

// import { add } from "./utils.js";

import isSenior, { isAdult, canDrink } from "../person.js";

import validator from "validator";

console.log("validator " + validator.isEmail("asfdfsd@gmail.com"));

console.log("APP JS IS RUNNING");

const template = <p>this jsx is from webpack</p>;

ReactDOM.render(template, document.getElementById("app"));
// console.log(isAdult(2));

// console.log(canDrink(432));

// console.log("is senior ", isSenior(65));
