// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if (!A.length) {
        return 1;
    }
    
    // find normal sum and actual sum, subtract and find value based on the result 
    const Anormal = A.map((el, i) => i + 1);
    const normalSum = Anormal.reduce((a, b) => a + b);
    const actualSum = A.reduce((a, b) => a + b);
    
    return A.length + (normalSum - actualSum + 1);
}
