//Task 1 Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate)
    console.log (`Net Salary: $${netSalary.toFixed(2)}`)
    return netSalary
};//Function to compute net salary
//Test Data
calculateSalary(5000, 500, 0.1); //Output: Net Salary: $ 5000.00
calculateSalary(7000, 1000, 0.15); //Output: Net Salary: $6950.00s
// Task 2 Product Price after Discount 
let calculateDiscount = (price, discountRate) => price - (price * discountRate);

// Test Data 
console.log(`Final Price: $${calculateDiscount(100, 0.2).toFixed(2)}`);
console.log(`Final Price: $${calculateDiscount(250, 0.15).toFixed(2)}`);