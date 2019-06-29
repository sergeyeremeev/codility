// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    // array for pushing final answers
    const answers = [];
    
    // how many times each letter appeared by the time we reach each index of the string
    let A = 0;
    let C = 0;
    let G = 0;
    let T = 0;
    const prefixesP = [];
    
    // construct array for each index to show how many times a letter has appeared by that index
    for (let i = S.length - 1; i >= 0; i--) {
        switch (S[i]) {
        case 'A':
            A++;
            break;
        case 'C':
            C++;
            break;
        case 'G':
            G++;
            break;
        case 'T':
            T++;
            break;
        default:
            break;
        } 
        prefixesP.push([A, C, G, T]);
    }
    
    // reverse to make it suffix, rather than prefix array
    prefixesP.reverse();

    // push empty array for last index, when 0 items are left
    prefixesP.push([0, 0, 0, 0]);
    
    // find smallest value for each prefix, which appeared more times than in suffix array, therefore it exist and is the smallest for that range
    for (let i = 0; i < P.length; i++) {
        let currentVal;
        const pref = prefixesP[P[i]];
        const suff = prefixesP[Q[i] + 1];
        
        for (let x = 0; x < 4; x++) {
            if (pref[x] > suff[x]) {
                currentVal = x + 1;
                break;
            }
        }
        
        answers.push(currentVal);
    }
    
    return answers;
}
