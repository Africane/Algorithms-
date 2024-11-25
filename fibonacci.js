// write a function fib(n) that takes in a number as an argument. The function should return the
// n-th number of the Fibonacci sequence. The first and second number of the sequence is 1. To
// generate the next number of the sequence, we sum the previous two.

const fib = (n) => {
    if (n<=2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(50)); // 21

// write a function fib(n) that takes in a number as an argument. The function should return the
// n-th number of the Fibonacci sequence. The first and second number of the sequence is 1. To
// generate the next number of the sequence, we sum the previous two.

