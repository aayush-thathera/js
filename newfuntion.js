function calculate(num1, operator, num2) {
    let result;
    
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            return "Error! Division by zero.";
        }
    } else {
        return "Invalid operator.";
    }
    
    return result;
}

// Example usage
console.log(calculate(10, '+', 5)); // Output: 15
console.log(calculate(10, '-', 5)); // Output: 5
console.log(calculate(10, '*', 5)); // Output: 50
console.log(calculate(10, '/', 5)); // Output: 2
console.log(calculate(10, '/', 0)); // Output: "Error! Division by zero."
