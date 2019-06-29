// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    // convert int to binary string
    const binN = N.toString(2);

    const binNlen = binN.length;
    let longest = 0;
    let currentGap = 0;
    let currentIdx = 0;
    
    // loop through all characters in a string
    while (currentIdx < binNlen) {

        // if '1' start new temporary result and check if previous is longer than the stored longest value
        if (binN[currentIdx] === '1') {
            longest = longest > currentGap ? longest : currentGap;
            currentGap = 0;
        } else if (binN[currentIdx] === '0') {
            currentGap += 1;
        }
        
        currentIdx += 1;
    }
    
    return longest;
}