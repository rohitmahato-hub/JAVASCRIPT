//foreach callback function

// let arr = [1,2,3,4,5];
// arr.forEach(function printval(val){
//     console.log(val);
// });

//arrow callback function

//  let arr = ["pune","delhi","mumbai"];
//  arr.forEach((val) =>{
//      console.log(val.toUpperCase());
//  });

//question

// let arr = [2,4,5,6];
// arr.forEach((val) =>{
//     console.log(val*val);
// });

//map method(koi naya array create karna ho to)

// let arr = [2,4,5,6];
// arr.map((val)=>{
//     console.log(val);
// });

//filter

// let arr = [2,3,4,5,5,6,3,8];
// let evenArr = arr.filter((val)=>{
//     return val % 2 === 0;
// });
// console.log(evenArr);

//reduce method

// let arr = [1,2,3,4];
// const output = arr.reduce((res, curr) =>{
//     return res + curr;
// });
// console.log(output);


//question

// let arr = [100,99,91,80,78];
// let newArr = arr.filter((val)=>{
//     return val > 90;
// });
// console.log(newArr);

//question

let num = prompt("enter a number:");
let arr = [];
for(let i = 1;i<=num;i++){
    arr[i-1] = i;
}
console.log(arr);
let sum = arr.reduce((res,curr)=>{
    return res + curr;
});
console.log(sum);