function checkPrime(n) {
    if (n < 2) return false; // 0 and 1 are not prime

    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false; // Not a prime number
        }
    }

    return true; // Prime number
}

let number = 5;  // How many prime numbers to print
let count = 0;
let num = 2;

while (count < number) {
    if (checkPrime(num)) {
        console.log(num);  // Print prime number
        count++;
    }
    num++;
}
