// Task 1 - Creating the Base Structure
	// Created and modified the HTML file

// Task 2 - Adding Employee Cards Dynamically

document.addEventListener("DOMContentLoaded", () => {
    const employeeContainer = document.getElementById("employeeContainer");
    const addEmployeeBtn = document.getElementById("addEmployeeBtn");

    function addEmployee(name, position) {
        // Create employee card
        const card = document.createElement("div");
        card.classList.add("employee-card");

        // Employee name
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = name;

        // Employee position
        const positionPara = document.createElement("p");
        positionPara.textContent = position;

        // Remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        // Append elements to card
        card.appendChild(nameHeading);
        card.appendChild(positionPara);
        card.appendChild(removeBtn);

        // Append card to container
        employeeContainer.appendChild(card);

        // Remove event listener (Fix: Ensure full card is removed)
        removeBtn.addEventListener("click", function () {
            card.remove(); // Remove the whole card
        });
    }

    // Event Listener for Adding Employee
    addEmployeeBtn.addEventListener("click", () => {
        const name = prompt("Enter Employee Name:");
        const position = prompt("Enter Employee Position:");
        if (name && position) {
            addEmployee(name, position);
        }
    });
});

