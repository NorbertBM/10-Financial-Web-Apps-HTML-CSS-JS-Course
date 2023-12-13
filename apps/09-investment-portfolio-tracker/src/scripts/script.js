// console.log("Boilerplate");

// Load data if it exists

let portfolio = JSON.parse(localStorage.getItem("portfolio")) || [];

// Add or Edit Stocks

document.getElementById("add-stock-form").onsubmit = (e) => addEditStock(e);

function addEditStock(e) {
  e.preventDefault();
  const symbol = document.getElementById("symbol").value.toUpperCase();
  const name = document.getElementById("name").value;
  const shares = document.getElementById("shares").value;
  const buyInPrice = document.getElementById("buy-in-price").value;
  const currentPrice = document.getElementById("current-price").value;

  if (!symbol || !name || isNaN(shares) || shares <= 0) {
    showAlert(
      "Please enter valid data",
      "danger",
      document.getElementById("add-stock-form")
    );
    return;
  }

  const existingStockIndex = portfolio.findIndex(
    (stock) => stock.symbol === symbol
  );

  if (existingStockIndex !== -1) {
    const existingStock = portfolio[existingStockIndex];
    existingStock.shares += shares;

    if (!isNaN(buyInPrice) && buyInPrice > 0) {
      existingStock.buyInPrice = buyInPrice;
    }

    if (!isNaN(currentPrice) && currentPrice > 0) {
      existingStock.currentPrice = currentPrice;
    }
  } else {
    const stock = {
      symbol,
      name,
      shares,
      buyInPrice: !isNaN(buyInPrice) && buyInPrice > 0 ? buyInPrice : null,
      currentPrice:
        !isNaN(currentPrice) && currentPrice > 0 ? currentPrice : null,
    };
    portfolio.push(stock);

    showAlert(
      "Stock add successfully",
      "success",
      document.getElementById("add-stock-form")
    );
  }

  // Clear inputs

  document.getElementById("symbol").value = "";
  document.getElementById("name").value = "";
  document.getElementById("shares").value = "";
  document.getElementById("buy-in-price").value = "";
  document.getElementById("current-price").value = "";

  // Save to local storage

  localStorage.setItem("portfolio", JSON.stringify(portfolio));

  console.log("stock add");
}

// Show Alerts

function showAlert(message, type, parentElement = document.body) {
  const alert = document.createElement("div");
  alert.classList.add("alert", type);
  alert.textContent = message;
  parentElement.appendChild(alert);
  setTimeout(() => {
    alert.remove();
  }, 3000);
}

// Number format with ,

function formatNumberWithPeriods(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
