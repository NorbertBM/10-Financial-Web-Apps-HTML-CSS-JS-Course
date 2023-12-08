// console.log("Boilerplate");

//DOM elements

const categorySelect = document.querySelector("#category");
const nameInput = document.querySelector("#name");
const amountInput = document.querySelector("#amount");
const addButton = document.querySelector("#addButton");
const budgetList = document.querySelector("#budgetList");

// Global Variables

const alertComponent = document.createElement("div");

// Budget Data
let budgetData = [];

let total = 0;

addButton.onclick = () => {
  const name = nameInput.value;
  const amount = parseFloat(amountInput.value);
  const category = categorySelect.value;

  //   Conditioning
  if (name && !isNaN(amount) && amount > 0) {
    const newItem = { name, amount, category };
    budgetData.push(newItem);

    // Calculate the total
    // console.log("calculateTotal");
    calculateTotal();
    // Update the budget list

    console.log("updateBudgetList");

    nameInput.value = "";
    amountInput.value = "";

    alert("Item added");
  } else {
    alert("Please enter a valid name and amount.");
  }
};

// Calc total budget

function calculateTotal() {
  total = 0;
  budgetData.forEach((item) => {
    if (item.category === "income") {
      total += item.amount;
    } else {
      total -= item.amount;
    }
  });
  // Calculate the total per category
  //   console.log("calculateTotalCategory");
  calculateTotalCategory();
  document.querySelector("#totalAmount").textContent = total.toFixed(2);
}

// Calculate the total per category function \

function calculateTotalCategory() {
  let totalIncome = 0;
  let totalHome_utilities = 0;
  let totalInsurance_financial = 0;
  let totalGroceries = 0;
  let totalPersonal_medical = 0;
  let totalEntertainment_eat_out = 0;
  let totalTransport_auto = 0;
  let totalChildren = 0;

  budgetData.forEach((item) => {
    switch (item.category) {
      case "income":
        totalIncome += item.amount;
        break;

      case "home_utilities":
        totalHome_utilities += item.amount;
        break;
      case "insurance_financial":
        totalInsurance_financial += item.amount;
        break;
      case "groceries":
        totalGroceries += item.amount;
        break;
      case "personal_medical":
        totalPersonal_medical += item.amount;
        break;
      case "entertainment_eat_out":
        totalEntertainment_eat_out += item.amount;
        break;
      case "transport_auto":
        totalTransport_auto += item.amount;
        break;
      case "children":
        totalChildren += item.amount;
        break;
      default:
        total += item.amount;
        break;
    }
    document.querySelector("#totalIncome").textContent = totalIncome.toFixed(2);
    document.querySelector("#totalHome_utilities").textContent =
      totalHome_utilities.toFixed(2);
    document.querySelector("#totalInsurance_financial").textContent =
      totalInsurance_financial.toFixed(2);
    document.querySelector("#totalGroceries").textContent =
      totalGroceries.toFixed(2);
    document.querySelector("#totalPersonal_medical").textContent =
      totalPersonal_medical.toFixed(2);
    document.querySelector("#totalEntertainment_eat_out").textContent =
      totalEntertainment_eat_out.toFixed(2);
    document.querySelector("#totalTransport_auto").textContent =
      totalTransport_auto.toFixed(2);
    document.querySelector("#totalChildren").textContent =
      totalChildren.toFixed(2);
  });
}
