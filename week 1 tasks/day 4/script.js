// =====================================
// TASK 1
// =====================================

// Normal Parameterized Function
// Function to calculate area of rectangle

function rectangleArea(length, width) {
    return length * width;
}

// Calling the function
let area = rectangleArea(10, 5);

document.getElementById("rectangleResult").innerHTML =
    "Area of Rectangle = " + area;


// Arrow Function
// Check whether a person is eligible to vote

const checkVoter = (age) => {
    if (age > 18) {
        return "Eligible to Vote";
    } else {
        return "Not Eligible to Vote";
    }
};

// Calling the arrow function
let age = 20;

document.getElementById("voterResult").innerHTML =
    "Age: " + age + " → " + checkVoter(age);


// =====================================
// TASK 2
// =====================================

// Ask user's name
const userName = prompt("Please enter your name:");

// Display name dynamically on webpage
document.getElementById("welcome").innerHTML =
    `Welcome, ${userName}!`;