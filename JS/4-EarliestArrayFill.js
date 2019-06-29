// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    // remove duplicates and go back to array
    const Aset = new Set(A);
    const setArr = Array.from(Aset);
    
    // if less elements than X - can't cross
    if (setArr.length < X) {
        return -1;
    }
    
    // return index of last value without duplicates
    return A.indexOf(setArr.pop());
}
