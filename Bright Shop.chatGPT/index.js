function navigateToAddSell() {
    document.querySelector(".dashboard").style.display = "none";
    document.querySelector(".add-sell").style.display = "block";
  }
  
  function addItem() {
    const container = document.getElementById("item-container");
    const newItem = document.createElement("div");
    newItem.innerHTML = `
      <input type="text" placeholder="Item Name" required>
      <input type="number" placeholder="Quantity" required>
      <input type="number" placeholder="Price" required>
    `;
    container.appendChild(newItem);
  }
  
  function submitData() {
    const items = document.querySelectorAll("#item-container div");
    const data = Array.from(items).map(item => {
      const inputs = item.querySelectorAll("input");
      return {
        name: inputs[0].value,
        quantity: inputs[1].value,
        price: inputs[2].value
      };
    });
  
    console.log("Submitted Data:", data);
  
    alert("Data submitted successfully!");
    document.getElementById("item-container").innerHTML = ""; // Clear items
  }
  