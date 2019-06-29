// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    // prepare counters array to be filled with N zeros
    let counters = [];
    counters.length = N;
    counters.fill(0);

    let countersMax = 0;
    let countersMulti = 0;
    
    // loop throught values in A
    for (let i = 0; i < A.length; i++) {
        const val = A[i];
        
        // if within N boundaries
        if (val <= N) {
            // if less than required minimum at this stage
            if (counters[val - 1] < countersMulti) {
                counters[val - 1] = countersMulti + 1;
            } else {
                // else just add 1 to the value at given index
                counters[val - 1] += 1;
            }
            
            // update countersMax if needed
            countersMax = countersMax < counters[val - 1] ? counters[val - 1] : countersMax;
        } else {
            // if outside N boundaries, set the minimum for all indexes
            countersMulti = countersMax;
        }
    }
    
    // update all indexes that are still under the minimum required value
    for (let i = 0; i < N; i++) {
        if (counters[i] < countersMulti) {
            counters[i] = countersMulti;
        }
    }
    
    return counters;
}
