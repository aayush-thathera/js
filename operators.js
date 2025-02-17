// Arithmetic Operators
let a = 10, b = 3;
console.log("Addition:", a + b);      // 13
console.log("Subtraction:", a - b);   // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);      // 3.3333
console.log("Modulus:", a % b);       // 1
console.log("Exponentiation:", a ** b); // 1000
console.log("Increment:", ++a);       // 11 (Pre-increment)
console.log("Decrement:", --b);       // 2 (Pre-decrement)

// Assignment Operators
let x = 5;
x += 3;  console.log("x += 3:", x);  // 8
x -= 2;  console.log("x -= 2:", x);  // 6
x *= 2;  console.log("x *= 2:", x);  // 12
x /= 3;  console.log("x /= 3:", x);  // 4
x %= 3;  console.log("x %= 3:", x);  // 1
x **= 2; console.log("x **= 2:", x); // 1

// Comparison Operators
console.log("10 == '10':", 10 == '10'); // true (loose comparison)
console.log("10 === '10':", 10 === '10'); // false (strict comparison)
console.log("10 != 5:", 10 != 5); // true
console.log("10 !== '10':", 10 !== '10'); // true
console.log("10 > 5:", 10 > 5); // true
console.log("10 < 5:", 10 < 5); // false
console.log("10 >= 10:", 10 >= 10); // true
console.log("5 <= 10:", 5 <= 10); // true

// Logical Operators
let p = true, q = false;
console.log("AND:", p && q); // false
console.log("OR:", p || q); // true
console.log("NOT:", !p); // false

// Bitwise Operators
let m = 5, n = 3;
console.log("Bitwise AND:", m & n); // 1
console.log("Bitwise OR:", m | n); // 7
console.log("Bitwise XOR:", m ^ n); // 6
console.log("Left Shift:", m << 1); // 10
console.log("Right Shift:", m >> 1); // 2
console.log("Zero Fill Right Shift:", m >>> 1); // 2

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote:", canVote);

// typeof Operator
console.log("Type of 42:", typeof 42); // number
console.log("Type of 'Hello':", typeof "Hello"); // string
console.log("Type of true:", typeof true); // boolean
