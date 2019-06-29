// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    const Asorted = A.sort((a, b) => a - b);
    
    // check if first value is 1
    if (Asorted[0] !== 1) {
        return 0;
    }
    
    const Alen = A.length;
    
    // check if value is 1 bigger than previous value
    for (let i = 1; i < A.length; i++) {
        if (A[i] !== A[i - 1] + 1) {
            return 0;
        }
    }
    
    return 1;
}
