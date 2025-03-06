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

// Task 3 - Converting NodeLists to Arrays for Bulk Updates

function highlightEmployees() {
    const cards = document.querySelectorAll(".employee-card"); // Select all employee cards
    const cardArray = Array.from(cards); // Convert NodeList to an array

    cardArray.forEach(card => {
        card.style.border = "2px solid blue"; // Add a blue border
        card.style.backgroundColor = "#f0f8ff"; // Light blue background for visibility
    });
}

// Example of calling the function for testing
document.addEventListener("keydown", (event) => {
    if (event.key === "h") {  // Press "h" key to trigger highlight
        highlightEmployees();
    }
});

// Task 4 - Implementing Removal of Employee Cards with Event Bubbling

document.addEventListener("DOMContentLoaded", () => {
    const employeeContainer = document.getElementById("employeeContainer");

    // Event Delegation: Remove Employee
    employeeContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-btn")) {
            event.stopPropagation(); // Prevent bubbling to container
            event.target.parentElement.remove(); // Remove employee card
        }
    });

    // Event Bubbling: Log message on clicking card
    employeeContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("employee-card")) {
            console.log("Employee card clicked!");
        }
    });
});

// Task 5 - Inline Editing of Employee Details

document.addEventListener("DOMContentLoaded", () => {
    const employeeContainer = document.getElementById("employeeContainer");

    function enableEditing(card) {
        const nameElement = card.querySelector("h3");
        const positionElement = card.querySelector("p");

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = nameElement.textContent;

        const positionInput = document.createElement("input");
        positionInput.type = "text";
        positionInput.value = positionElement.textContent;

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";

        card.innerHTML = ""; //Clear the card
        card.appendChild(nameInput);
        card.appendChild(positionInput);
        card.appendChild(saveButton);

        saveButton.addEventListener("click", () => {
            nameElement.textContent = nameInput.value;
            positionElement.textContent = positionInput.value;
        
    	// Reset the card content after saving
            card.innerHTML = "";
            card.appendChild(nameElement);
            card.appendChild(positionElement);
            card.appendChild(saveButton);
 	
	// Restore Remove Button
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.classList.add("remove-btn");
            card.appendChild(removeBtn);

        // Reattach Remove functionality
            removeBtn.addEventListener("click", (event) => {
                event.stopPropagation();
                card.remove();
            });
        });
    }

    // Double-click to edit employee details
    employeeContainer.addEventListener("dblclick", (event) => {
        if (event.target.closest(".employee-card")) {
            enableEditing(event.target.closest(".employee-card"));
        }
    });
});
