// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    const Alen = A.length;

    // Check difference at the first index
    let totalSum = A.reduce((a, b) => a + b) - A[0];
    let currentSum = A[0];
    let minDiff = Math.abs(totalSum - currentSum);
    
    // Iterate through indexes, add to the left, subtract from the right, compare differences
    for (let i = 1; i < Alen - 1; i++) {
        totalSum -= A[i];
        currentSum += A[i];
        const diff = Math.abs(totalSum - currentSum);
        minDiff = minDiff < diff ? minDiff : diff;
    }
    
    return minDiff;
}