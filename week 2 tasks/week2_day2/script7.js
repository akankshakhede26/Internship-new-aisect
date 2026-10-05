// ========================================================
// Week 2 Day 2: Array Methods (map, filter, reduce)
// ========================================================


// ========================================================
// Task 1 – Data Transformation with map() and filter()
// ========================================================
console.log("===== TASK 1: DATA TRANSFORMATION =====");

const prices = [120, 250, 300, 450, 600];

// Step 1: filter() keeps only numbers greater than 250
const filteredPrices = prices.filter(price => price > 250);

// Step 2: map() takes each price and applies a 10% discount (multiply by 0.9)
const discountedPrices = filteredPrices.map(price => price * 0.9);

// Step 3: Print both arrays to console
console.log("Original Prices:", prices);
console.log("Filtered Prices (> 250):", filteredPrices);
console.log("Discounted Prices (10% off):", discountedPrices);


// ========================================================
// Task 2 – Calculate Total Expense with reduce()
// ========================================================
console.log("\n===== TASK 2: TOTAL EXPENSE WITH REDUCE =====");

const expenses = [
  { category: "Food", amount: 300 },
  { category: "Transport", amount: 150 },
  { category: "Shopping", amount: 400 },
];

// reduce() adds each amount into a running total starting at 0
const totalExpense = expenses.reduce((total, item) => {
  return total + item.amount;
}, 0);

// Output: "Total Expense: ₹850"
console.log(`Total Expense: ₹${totalExpense}`);


// ========================================================
// Task 3 – Combine map(), filter(), reduce()
// ========================================================
console.log("\n===== TASK 3: COMBINE MAP, FILTER, REDUCE =====");

const scores = [45, 80, 90, 35, 60, 75];

// Step 1: Keep only passing marks (50 or more)
const passingScores = scores.filter(score => score >= 50);

// Step 2: Add 10 bonus marks to each passing score
const scoresWithBonus = passingScores.map(score => score + 10);

// Step 3: Calculate the total of all updated scores
const totalScore = scoresWithBonus.reduce((sum, score) => sum + score, 0);

console.log("Original Scores:", scores);
console.log("Passing Scores (>= 50):", passingScores);
console.log("Scores with Bonus (+10):", scoresWithBonus);
console.log("Total Score:", totalScore);

// Pro Tip (Method Chaining): You can also write it in one chain:
const totalChained = scores
  .filter(score => score >= 50)
  .map(score => score + 10)
  .reduce((sum, score) => sum + score, 0);

console.log("Total using chaining:", totalChained);


// ========================================================
// Mini Challenge: “Student Score Analyzer”
// ========================================================
console.log("\n===== MINI CHALLENGE: STUDENT SCORE ANALYZER =====");

const students = [
  { name: "Aman", marks: 85 },
  { name: "Sara", marks: 42 },
  { name: "Riya", marks: 68 },
  { name: "John", marks: 49 },
];

// 1. Filter students who passed (marks >= 50)
const passedStudents = students.filter(student => student.marks >= 50);

// 2. Add 5 bonus marks to each student who passed
const finalStudents = passedStudents.map(student => {
  return {
    name: student.name,
    finalScore: student.marks + 5,
  };
});

// 3. Log each student's name and final score
finalStudents.forEach(student => {
  console.log(`${student.name}: ${student.finalScore}`);
});

// 4. Calculate total marks of passed students and find average
const totalMarks = finalStudents.reduce((sum, student) => sum + student.finalScore, 0);
const classAverage = totalMarks / finalStudents.length;

console.log(`Class Average: ${classAverage}`);


// ========================================================
// Function for Browser Button
// ========================================================
function runTasks() {
  console.clear();
  console.log("========== ES6 HIGHER ORDER FUNCTIONS ==========\n");

  console.log("Task 1 - Prices:");
  console.log("Original:", prices);
  console.log("Discounted (>250, 10% off):", discountedPrices);

  console.log("\nTask 2 - Total Expense:");
  console.log(`Total Expense: ₹${totalExpense}`);

  console.log("\nTask 3 - Combined Scores Total:");
  console.log(`Total: ${totalScore}`);

  console.log("\nMini Challenge - Student Score Analyzer:");
  finalStudents.forEach(student => {
    console.log(`${student.name}: ${student.finalScore}`);
  });
  console.log(`Class Average: ${classAverage}`);
}
