// Import functions from the index.js file
const { factorial, gcd, lcm, isPrime, fibonacci } = require('./index');

// Testing factorial
console.log("Testing factorial:");
try {
    console.log("Factorial of 5:", factorial(5)); // 120
    console.log("Factorial of 0:", factorial(0)); // 1
    console.log("Factorial of 1:", factorial(1)); // 1
    console.log("Factorial of -3 (should throw an error):");
    console.log(factorial(-3)); // Error
} catch (error) {
    console.error("Error:", error.message);
}

// Testing GCD
console.log("\nTesting GCD:");
console.log("GCD of 36 and 60:", gcd(36, 60)); // 12
console.log("GCD of 101 and 103:", gcd(101, 103)); // 1
console.log("GCD of 0 and 5:", gcd(0, 5)); // 5

// Testing LCM
console.log("\nTesting LCM:");
console.log("LCM of 36 and 60:", lcm(36, 60)); // 180
console.log("LCM of 0 and 5:", lcm(0, 5)); // 0
console.log("LCM of 7 and 3:", lcm(7, 3)); // 21

// Testing isPrime
console.log("\nTesting isPrime:");
console.log("Is 29 prime?:", isPrime(29)); // true
console.log("Is 1 prime?:", isPrime(1)); // false
console.log("Is 0 prime?:", isPrime(0)); // false
console.log("Is 100 prime?:", isPrime(100)); // false

// Testing Fibonacci
console.log("\nTesting Fibonacci:");
console.log("Fibonacci sequence (5 terms):", fibonacci(5)); // [0, 1, 1, 2, 3]
console.log("Fibonacci sequence (1 term):", fibonacci(1)); // [0]
console.log("Fibonacci sequence (0 terms):", fibonacci(0)); // []
console.log("Fibonacci sequence (10 terms):", fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
