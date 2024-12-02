let stockItems = [];

function addItem() {
    const id = document.getElementById('item-id').value;
    const name = document.getElementById('item-name').value;
    const quantity = document.getElementById('item-quantity').value;
    const price = document.getElementById('item-price').value;

    if (id && name && quantity && price) {
        const newItem = { id, name, quantity: parseInt(quantity), price: parseFloat(price) };
        stockItems.push(newItem);
        updateTable();
        clearForm();
    } else {
        alert("Please fill in all fields.");
    }
}

function updateTable() {
    const tableBody = document.getElementById('stock-table');
    tableBody.innerHTML = ""; // Clear the table
    stockItems.forEach((item, index) => {
        const row = `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>
                <button onclick="deleteItem(${index})">Delete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function deleteItem(index) {
    stockItems.splice(index, 1);
    updateTable();
}

function clearForm() {
    document.getElementById('item-id').value = '';
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
    document.getElementById('item-price').value = '';
}
