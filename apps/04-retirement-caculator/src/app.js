// console.log("Boilerplate");

// (function () {
//   console.log("This is an IIFE");
// })();

(() => {
  document.getElementById("currentAge").focus();
})();

import { showAlert } from "./utilities/showAlert.js";

import { calculateRetirement } from "./utilities/calculateRetirement.js";

document.getElementById("calculateBtn").onclick = () =>
  calculateRetirement(showAlert);
