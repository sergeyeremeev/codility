// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    // remove anything below 1, remove duplicates, sort in asc order
    const Afiltered = A.filter(a => a > 0);
    const Aset = new Set(Afiltered);
    const setArr = Array.from(Aset);
    const sortedArr = setArr.sort((a, b) => a - b);
    
    // if first items is not 1 return 1
    if (sortedArr[0] !== 1) {
        return 1;
    }
    
    const sortedLen = sortedArr.length;
    
    // if one of the items is not in order -> return it
    for (let i = 0; i < sortedLen; i++) {
        if (sortedArr[i] !== i + 1) {
            return i + 1;
        }
    }
    
    // return 1 larger than the last item
    return sortedLen + 1;
}
