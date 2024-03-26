/* const numbers = [1, 2, 3, 4, 5]

// Sum Up
const sum = numbers.reduce((total, currentValue) => {
    return total + currentValue;
}, 0)

console.log(sum)  */

let numbers = [5, 20, 100, 60, 1];
const maxValue = numbers.reduce((max, curr) => {
    console.log('current',curr)
    console.log('maximum',max)
    if(curr > max) max = curr;
    return max;
});
console.log(maxValue); // 100