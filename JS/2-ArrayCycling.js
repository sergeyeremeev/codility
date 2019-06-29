// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    const Alen = A.length;
    
    if (Alen <= 1) {
        return A;
    }
    
    // Slice array into two parts based on how many effective rotations need to be made
    const rotDiff = Alen - K % Alen;
    
    const firstPart = A.slice(rotDiff);
    const secondPart = A.slice(0, rotDiff);
    
    // join these parts and return the result
    return firstPart.concat(secondPart);
}
