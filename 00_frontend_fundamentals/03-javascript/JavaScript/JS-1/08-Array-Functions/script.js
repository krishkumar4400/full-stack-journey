// 1. forEach Loop in Arrays (Method)
/**
 * arr.forEach(callback function)
 *  - Callback function: Here, it is a function to execute for each element 
 * in the array.
 * 
 * A callback is a function passed as an argument to another function.
 * 
 * Syntax:
 *      arr.forEach((val, index, array itself) => {
 *          console.log(val)
 *      });
 * method - the functions which are associated with any object like string or array or objects to manipulate them eg: toUpperCase() etc.
 * function - the functions can take input and perform task and can return values or give outputs
 */

const arr = [1,2,3,4,5];

arr.forEach(function printValue(val) { // value at each index.
    console.log(val); 
});

const cities = ['bihar', 'up', 'mp', 'jh', 'delhi', 'gujrat', 'surat'];

cities.forEach((city) => {
    console.log(city);
});

// it is also used to perform some tasks and operations:
const friends = ['krish', 'ankit', 'sami', 'raj', 'ashish'];

friends.forEach((friend, index, arr) => {
    console.log(friend.toUpperCase());
    console.log(index);
    console.log(arr);
    console.log(arr[index].toUpperCase());
});

// Note: Only be used for arrays not for strings.

// Higher order functions or methods: function that takes another functions as an argument or return a function.
    // eg: forEach, map, filter etc.

const nums = [1,2,3,4];

nums.forEach((num) => {
    console.log(num**2); 
});

const calculateSquare = (num) => {
    console.log(num * num);
}

num1 = [10,20,30,40,50];
num1.forEach(calculateSquare);

// Map Method
/**
 * Map:
 *      creates a new array with the results of some operation. The value its callback returns are used to form enw array 
 * 
 * syntax: 
 *      arr.map(callbackFnx(value, index, array));
 * 
 * let newArray = arr.map((val) => {
 * return val * 2;
 * });
 */

console.log("Map Method");

const arr1 = [11,22,33,44,55];

// printing values using map method 
arr1.map((val) => {
    console.log(val);
});
arr1.map((val, index, arr) => {
    console.log(val * 2, index);
    console.log(arr)
});

const newArr1 = arr1.map((val) => {
    return val * val;
});
console.log("Map Array");
console.log(newArr1);

/**
 * Filter Method:
 *      Creates a new array of elements that give true for a condition/filter. 
 * Eg. All even elements.
 * 
 * let newArray = arr.filter((val) => {
 *      return val % 2 === 0;
 * });
 */

console.log("Filter Array Method");
const arr2 = [10,12];
arr2.filter((val) => {
    console.log(val); 
});
const newArr11 = arr2.filter((val) => {
    return val % 2;
});
console.log(newArr11);
const newArr2 = arr2.filter((val) => {
    return val > 5;
});
console.log(newArr2);
const newArr3 = arr2.filter((val) => {
    return val < 5;
});
console.log(newArr3);

/**
 * Reduce Method:
 *  Performs some operation & reduces the array to a single value. It returns that single value. 
 * 
 * const array1 = [1,2,3,4];
 * 
 * // 0+1+2+3+4
 * const initialValue=0;
 * const sumWithInitial=array1.reduce(
 *      (accumulator, currentValue) => accumulator + currentValue, InitialValue, 
 * );
 * console.log(sumWithInitial);
 * // Expected output: 10
 */

console.log("Reduce Method: ");
const arr4 = [1,2,3,4];
arr4.reduce((res,curr,index, arr) => {
    console.log(res, curr, index, arr); 
});

const sum = arr4.reduce((res, curr) => {
    return res + curr;
});

console.log(sum);

values = [2,4,6,1,110];

const max = values.reduce((prev,curr) => {
    return prev > curr ? prev : curr; 
});
console.log(max); // 110