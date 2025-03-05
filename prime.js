let num = parseInt(prompt("Enter a number to check if it's prime:")); 
let isPrime = num > 1; // Assume true unless proven otherwise

for (let i = 2; i * i <= num && isPrime; i++) {
    isPrime = num % i !== 0;
}

alert(isPrime ? "Prime" : "Not Prime");
