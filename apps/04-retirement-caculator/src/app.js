// console.log("Boilerplate");

// (function () {
//   console.log("This is an IIFE");
// })();

(() => {
  document.getElementById("currentAge").focus();
})();

import {
  handleErrorLabel,
  handleSuccessLabel,
} from "./utilities/handleLabels.js";

import { showAlert } from "./utilities/showAlert.js";

import { calculateRetirement } from "./utilities/calculateRetirement.js";

document.getElementById("calculateBtn").onclick = () =>
  calculateRetirement(showAlert, handleErrorLabel, handleSuccessLabel);

// Table
import { addRow } from "./utilities/addRow.js";
import { deleteRow } from "./utilities/deleteRow.js";
document.getElementById("add").onclick = () => addRow(showAlert, deleteRow);
