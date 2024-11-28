document.getElementById('submit-button').addEventListener('click', () => {
    const sellPrice = parseFloat(document.getElementById('sell-price').value);
    const discount = parseFloat(document.getElementById('discount').value || 0);
    const cash = parseFloat(document.getElementById('cash').value || 0);
  
    // Calculate total price
    const totalPrice = sellPrice - discount;
  
    // Display total price
    document.getElementById('price-total').value = totalPrice;
  
    if (cash < totalPrice) {
      alert('Insufficient cash provided!');
    } else {
      alert('Transaction successful!');
    }
  });
  
  // Adding an item functionality
  const itemsTable = document.getElementById('items-table');
  document.querySelectorAll('.btn-green').forEach((button) =>
    button.addEventListener('click', () => {
      const newRow = itemsTable.insertRow();
      newRow.innerHTML = `
        <tbody id="items-table">
          <tr>
            <td><input type="text" value="Toyaa" ></td>
            <td><input type="number" value="0"></td>
            <td><input type="number" value="0" ></td>
            <td><button class="btn-green">Add Items</button></td>
          </tr>
        </tbody>
      `;
    })

  );
  
