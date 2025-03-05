let num = 29; // Change this to test different numbers
let isPrime = num > 1; // Assume true unless proven otherwise

for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime ? "Prime" : "Not Prime");
