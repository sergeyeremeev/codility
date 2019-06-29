// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    // sort Array
    const Asorted = A.sort((a, b) => a - b);
    
    // loop through odd values, if next value doesn't exist or if it's not equal to current value, return current value
    for (let i = 0; i < A.length; i += 2) {
        if (!A[i + 1] || A[i] !== A[i + 1]) {
            return A[i];
        }
    }
}