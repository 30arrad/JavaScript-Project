// Add functionality for adding new items
document.getElementById('add-item-btn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Clone the items section
    const itemsContainer = document.getElementById('items-container');
    const newItemSection = document.querySelector('.items-section').cloneNode(true);
  
    // Clear input values in the cloned section
    const inputs = newItemSection.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
  
    // Attach event listeners to new buttons
    attachItemListeners(newItemSection);
  
    // Append the cloned section
    itemsContainer.appendChild(newItemSection);
  });
  
  // Function to calculate the total sell price
  function updateSellPrice() {
    const priceInputs = document.querySelectorAll('.items-section input[type="text"]');
    let totalSellPrice = 0;
  
    priceInputs.forEach(input => {
      const priceValue = parseFloat(input.value) || 0; // Default to 0 if not a number
      totalSellPrice += priceValue;
    });
  
    // Update the Sell Price label
    const sellPriceField = document.querySelector('#sell-price-label + input');
    sellPriceField.value = totalSellPrice.toFixed(2); // Format to two decimal places
  }
  
  // Function to attach listeners to item section buttons
  function attachItemListeners(section) {
    // Delete button functionality
    const deleteBtn = section.querySelector('.delete-item-btn');
    deleteBtn.addEventListener('click', function () {
      section.remove(); // Remove the item section
      updateSellPrice(); // Recalculate the total sell price
    });
  
    // Attach listener for price change
    const priceInput = section.querySelector('#price-label + input');
    if (priceInput) {
      priceInput.addEventListener('input', updateSellPrice);
    }
  }
  
  // Attach listeners to existing sections
  document.querySelectorAll('.items-section').forEach(section => {
    attachItemListeners(section);
  });
  