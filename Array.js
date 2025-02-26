let numbers = [10, 20, 30, 40, 50];

// Append elements
numbers.push(60);  // [10, 20, 30, 40, 50, 60]

// Remove last element
numbers.pop();  // [10, 20, 30, 40, 50]

// Add to the beginning
numbers.unshift(5);  // [5, 10, 20, 30, 40, 50]

// Remove first element
numbers.shift();  // [10, 20, 30, 40, 50]

// Extract part of the array
let sliced = numbers.slice(1, 3);  // [20, 30]

// Merge with another array
let merged = numbers.concat([60, 70]);  // [10, 20, 30, 40, 50, 60, 70]

// Modify elements
let mapped = numbers.map(num => num * 2);  // [20, 40, 60, 80, 100]

// Filter elements
let filtered = numbers.filter(num => num > 20);  // [30, 40, 50]

// Sort array
let sorted = numbers.sort((a, b) => b - a);  // [50, 40, 30, 20, 10]

// Reverse array
let reversed = numbers.reverse();  // [10, 20, 30, 40, 50]

console.log("Original Array:", numbers);
console.log("Sliced:", sliced);
console.log("Merged:", merged);
console.log("Mapped:", mapped);
console.log("Filtered:", filtered);
console.log("Sorted:", sorted);
console.log("Reversed:", reversed);
