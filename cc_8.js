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
//Task 3 Arrow Function
let calculateServiceFee = (amount, serviceType) => {
    let fee;
    if (serviceType === "Premium") {
        fee = amount * 0.15; //"Premium" rating gets a 15% fee
    }
    else if (serviceType === "Standard"){
        fee = amount * 0.1; // "Standard" rating gets a 10% fee
    }
    else if (serviceType === "Basic") {
        fee = amount * 0.05; //"Basic" rating gets a 5% fee
    }
    console.log (`Service Fee: $${fee.toFixed(2)}`)
    return fee;
};//Function that applies certain fees

calculateServiceFee(200, "Premium"); //Output: Service Fee: $30.00
calculateServiceFee(500, "Standard"); //Output: Service Fee: $50.00
// Task 4 Car Rental Cost Calculation 
function calculateRentalCost(days, carType, insurance = false){
    let dailyRate = 0;

    // Daily rates 
    if (carType === "Economy") {
        dailyRate = 40; 
    } else if (carType === "Standard") {
        dailyRate = 60; 
    } else if (carType === "luxury") {
        dailyRate = 100;
    }

    // Calculation 
    let totalCost = dailyRate * days;

    // Insurance 
    if (insurance) {
        totalCost += 20 * days; 
    }
    return totalCost
}

// Test data 
console.log(calculateRentalCost(3, "Economy", true));
console.log(calculateRentalCost(5, "Luxury", false));
