
const nums=[1,2,3,4];
const doubled= nums.map(num=> num*2);
console.log(doubled);
//output [2,4,6]
/* map() creates a new array by transforming each element */

const even =nums.filter(num => num%2===0);
console.log(even);
//output [2,4]
/* filter() creates a new array with only elements that pass a condition */
const result=nums.find( num=> num>2)
console.log(result)
//output 3
/* find() returns the first element that matches a condition */
const hasEven=nums.some(num=>num%2===0);
console.log(hasEven);
//output true
/* some() returns true if atleast one element  matches a condition */
const allEven=nums.every(num =>num%2===0)
console.log(allEven)
//output false
/* every() returns true if all elements matches a condition */
const fruits=['apple','banana','orange'];
console.log(fruits.includes('banana'));//true
console.log(fruits.includes('grapes'));//false
//checks if an array contains a specific value
console.log(fruits.join(','));//output apple,banana
//joins all elements to a string

console.log(nums.indexOf(1));//output :0
//return the index of the given value

const arr=[1,[2,[3]]]
console.log(arr.flat());//output [1,2,[3]]
//we can also gave depth
console.log(arr.flat(2));//output [1,2,3]
//flattens nested rray into a single level
const num1=[23,11,43,0];
console.log(num1.sort());//output [ 0, 11, 23, 43 ] asc by default

console.log(fruits.slice(0,2));//[ 'apple', 'banana' ]
// slice() return selected array elements as a new array array.slice(start,end)

const demo=['a','b','c'];
demo.splice(1,1,'x');
console.log(demo)//output [ 'a', 'x', 'c' ]
//adds /remove elements to/from original array