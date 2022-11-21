/* eslint-disable no-unused-vars, no-prototype-builtins */
//🦑 On the right track, but see if you can work on the problem again. Possibly while mofidying the bank string so we don't count letters twice.
function soup(phrase, bank) {
    bank = [...bank];
    for (let i = 0; i < phrase.length; i++) {
        if (!bank.includes(phrase[i])) return false;
        else bank.splice(bank.indexOf(phrase[i]), 1);
    }
    return true;
}


// solution Fullstack


// const soup = (phrase, bank) => {
//     const charTally = {};
//     for (let i = 0; i <= bank.length; i++) {
//         let char = bank[i];
//         if (charTally[char]) charTally[char]++;
//         else charTally[char] = 1;
//     }

//     for (let i = 0; i < phrase.length; i++) {
//         if (charTally[phrase[i]] > 0){
//             charTally[phrase[i]]--;
//         } else {
//             return false;
//         }
//     }
//     return true;
// }