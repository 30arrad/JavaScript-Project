document.addEventListener('DOMContentLoaded', () => {
    let itemIndex = 1; // Start with the first item section
  
    // Function to calculate total price for a given section
    function calculateTotal(sectionId) {
      const sellPrice = parseFloat(document.getElementById(`sellPrice${sectionId}`).value) || 0;
      const quantity = parseInt(document.getElementById(`quantity${sectionId}`).value, 10) || 0;
      const discount = parseFloat(document.getElementById(`discount${sectionId}`).value) || 0;
      const totalPrice = (sellPrice * quantity) - discount;
  
      document.getElementById(`totalPrice${sectionId}`).value = totalPrice > 0 ? totalPrice.toFixed(2) : 0;
    }
  
    // Add event listeners to the initial section
    document.getElementById('quantity1').addEventListener('input', () => calculateTotal(1));
    document.getElementById('discount1').addEventListener('input', () => calculateTotal(1));
  
    // Add new item section
    document.getElementById('addItem').addEventListener('click', () => {
      itemIndex++;
      const itemsContainer = document.getElementById('itemsContainer');
  
      // Create a new item section dynamically
      const newSection = document.createElement('div');
      newSection.classList.add('form-section');
      newSection.id = `itemSection${itemIndex}`;
      newSection.innerHTML = `
        <h3>Select Items</h3>
        <div class="form-group">
          <label for="itemName${itemIndex}">Select Items Name</label>
          <input type="text" id="itemName${itemIndex}" placeholder="Select Items Name" disabled>
        </div>
        <div class="form-group">
          <label for="sellPrice${itemIndex}">Sell Price:</label>
          <input type="number" id="sellPrice${itemIndex}" 
        <div class="form-group">
          <label for="quantity${itemIndex}">Quantity:</label>
          <input type="number" id="quantity${itemIndex}">
        </div>
        <div class="form-group">
            <div class="discountdiv">
            <label for="discountType1"${itemIndex}>Discount:</label>
                <select id="discountType1">
                    <option value="amount" selected>₹</option>
                    <option value="percent">%</option>
                  </select>
            </div>
            <input type="number" id="discount1"${itemIndex}>
          </div>
        <div class="form-group">
          <label for="totalPrice${itemIndex}">Total Price:</label>
          <input type="number" id="totalPrice${itemIndex}"  readonly>
        </div>

        <div class="button-group">
        <button type="button" id="addItem" >Add Items</button>
      </div>
      `;

      
      // Append the new section to the container
      itemsContainer.appendChild(newSection);
  
      // Add event listeners for the new section
      document.getElementById(`quantity${itemIndex}`).addEventListener('input', () => calculateTotal(itemIndex));
      document.getElementById(`discount${itemIndex}`).addEventListener('input', () => calculateTotal(itemIndex));
    });
  });
  

