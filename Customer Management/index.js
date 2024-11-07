document.addEventListener("DOMContentLoaded", () => {
    const customerForm = document.getElementById("customerForm");
    const customerTable = document.getElementById("customerTable").querySelector("tbody");
    let customers = JSON.parse(localStorage.getItem("customers")) || [];

    function displayCustomers() {
        customerTable.innerHTML = "";
        customers.forEach((customer, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editCustomer(${index})">Edit</button>
                    <button class="action-btn delete-btn" onclick="deleteCustomer(${index})">Delete</button>
                </td>
            `;
            customerTable.appendChild(row);
        });
    }

    customerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const customerId = document.getElementById("customerId").value;

        if (customerId) {
            customers[customerId] = { name, email, phone };
            document.getElementById("submitBtn").textContent = "Add Customer";
        } else {
            customers.push({ name, email, phone });
        }

        localStorage.setItem("customers", JSON.stringify(customers));
        customerForm.reset();
        displayCustomers();
    });

    window.editCustomer = function(index) {
        const customer = customers[index];
        document.getElementById("name").value = customer.name;
        document.getElementById("email").value = customer.email;
        document.getElementById("phone").value = customer.phone;
        document.getElementById("customerId").value = index;
        document.getElementById("submitBtn").textContent = "Update Customer";
    }

    window.deleteCustomer = function(index) {
        customers.splice(index, 1);
        localStorage.setItem("customers", JSON.stringify(customers));
        displayCustomers();
    }

    displayCustomers();
});
