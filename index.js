// math-helper-tools

/**
 * Calculate the factorial of a number.
 * @param {number} n - The number to calculate the factorial for.
 * @returns {number} - The factorial of the number.
 */
function factorial(n) {
    if (n < 0) throw new Error("Factorial is not defined for negative numbers");
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

/**
 * Calculate the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} - The GCD of the two numbers.
 */
function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return Math.abs(a);
}

/**
 * Calculate the Least Common Multiple (LCM) of two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} - The LCM of the two numbers.
 */
function lcm(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / gcd(a, b);
}

/**
 * Check if a number is a prime number.
 * @param {number} n - The number to check.
 * @returns {boolean} - True if the number is prime, false otherwise.
 */
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

/**
 * Generate the Fibonacci sequence up to the nth term.
 * @param {number} n - The number of terms to generate.
 * @returns {number[]} - An array containing the Fibonacci sequence.
 */
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Export all functions
module.exports = {
    factorial,
    gcd,
    lcm,
    isPrime,
    fibonacci,
};
