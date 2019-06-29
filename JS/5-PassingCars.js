// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    const Alen = A.length;

    // multiplier for 1's represented by number of 0's
    let currentSum = 0;
    let total = 0;
    
    for (let i = 0; i < Alen; i++) {
        // increase multiplier
        if (A[i] === 0) {
            currentSum++;
        } else {
            // add multiplier if 1 occurs
            total += currentSum;
        }
        
        // don't forget about the > 1000000000 condition
        if (total > 1000000000) {
            return -1;
        }
    }
    
    return total;
}
