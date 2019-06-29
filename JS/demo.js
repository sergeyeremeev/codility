// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    // check if it's empty -> return 1 if yes
    const Alen = A.length;
    if (!Alen) {
        return 1;
    }
    
    // filter for only positive values and sort in asc order
    const Afiltered = A.filter(a => a > 0);
    const Asorted = Afiltered.sort((a, b) => a - b);
    
    // if all values were less or equal to zero return 1
    if (!Afiltered.length) {
        return 1;
    }
    
    // remove duplicates
    const Aset = [...new Set(Asorted)];
    
    // if first value is not 1 -> return 1
    if (Aset[0] !== 1) {
        return 1;
    }
    
    // loop through values and find first missing value
    for (let i = 0; i < Aset.length; i++) {
        if (Aset[i] !== i + 1) {
            return i + 1;
        }
    }
    
    // if all values are present return 1 bigger than the last one
    return Aset.length + 1;
}