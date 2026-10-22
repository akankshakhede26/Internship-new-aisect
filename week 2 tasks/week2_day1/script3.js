// ==========================================
// Task 1 – Array/Object Destructuring
// ==========================================

console.log("===== TASK 1: OBJECT DESTRUCTURING =====");

const car = {
    brand: "Tesla",
    model: "Model 3",
    color: "white"
};

// Extract brand and model using destructuring
const { brand, model } = car;

// Log them to the console
console.log("Brand:", brand);
console.log("Model:", model);


// ==========================================
// Task 2 – Spread/Rest Practice
// ==========================================

console.log("===== TASK 2: SPREAD / REST =====");

const fruits = ["apple", "banana"];

const moreFruits = ["cherry", "mango"];

// Merge both arrays using spread
const allFruits = [...fruits, ...moreFruits];

console.log("All Fruits:", allFruits);


// Function that takes any number of fruits
function printFruits(...fruitList) {
    console.log("Fruits:");

    fruitList.forEach((fruit) => {
        console.log(fruit);
    });
}

// Calling the function
printFruits("apple", "banana", "cherry", "mango");


// ==========================================
// Task 3 – Template Literals
// ==========================================

console.log("===== TASK 3: TEMPLATE LITERALS =====");

const name = "Priya";
const course = "JavaScript Mastery";

// Template literal
console.log(`Hello ${name}! Welcome to ${course}.`);


// ==========================================
// Task 4 – Code Refactor
// ==========================================

console.log("===== TASK 4: CODE REFACTOR =====");

// Old JavaScript:
// var user = {name: "Aman", age: 22};

// ES6 version
const user = {
    name: "Aman",
    age: 22
};

// ES6 arrow function
const greet = (user) => {
    return `Hello ${user.name}, you are ${user.age} years old.`;
};

console.log(greet(user));


// ==========================================
// Run All Tasks Function
// ==========================================

function runTasks() {

    console.clear();

    console.log("========== ES6 JAVASCRIPT PRACTICE ==========");

    // Task 1
    console.log("\n===== TASK 1 =====");

    const carData = {
        brand: "Tesla",
        model: "Model 3",
        color: "white"
    };

    const { brand: carBrand, model: carModel } = carData;

    console.log("Brand:", carBrand);
    console.log("Model:", carModel);


    // Task 2
    console.log("\n===== TASK 2 =====");

    const fruitsData = ["apple", "banana"];
    const moreFruitsData = ["cherry", "mango"];

    const allFruitsData = [
        ...fruitsData,
        ...moreFruitsData
    ];

    console.log("Merged Fruits:", allFruitsData);

    const showFruits = (...items) => {
        items.forEach((item) => {
            console.log(item);
        });
    };

    showFruits(...allFruitsData);


    // Task 3
    console.log("\n===== TASK 3 =====");

    const studentName = "Priya";
    const studentCourse = "JavaScript Mastery";

    console.log(
        `Hello ${studentName}! Welcome to ${studentCourse}.`
    );


    // Task 4
    console.log("\n===== TASK 4 =====");

    const student = {
        name: "Aman",
        age: 22
    };

    const greeting = (student) => {
        return `Hello ${student.name}, you are ${student.age} years old.`;
    };

    console.log(greeting(student));

    console.log("\n========== ALL TASKS COMPLETED ==========");
}