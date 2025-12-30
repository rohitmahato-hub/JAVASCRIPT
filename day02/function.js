//function

// function greeting(){
//     console.log("Hello world");
// }
// greeting();

// function addNumber(num1,num2){
//     const sum = num1+num2;
//     console.log(sum);
// }
// addNumber(4,5);
// addNumber(4,59);

//rest operator

// function addNumber(...num){
//     let sum = 0;
//     for(let n of num){
//         sum += n;
//     }
//     console.log(sum);
// }
// addNumber(6,7);
// addNumber(6,7,8);
// addNumber(6,7,8,9);


//function expression

// const addNumber = function(num1,num2){
//     return num1+num2;
// }
// console.log(addNumber(3,5));

//another method

// console.log(addNumber(3,5));
// function addNumber(num1,num2){
//     return num1+num2;
// }
// // console.log(addNumber(3,5));

//arrow function

// const message = ()=>{
//     console.log("hello world");
// }
// message();

//or

// const addNumber = (num1,num2)=>{
//     return num1+num2;
// }
// console.log(addNumber(3,5));

//agr singke parameter ho to () iski kio jarurt nhi

// const squareNumber = num=>num*num;
// console.log(squareNumber(6));

//IIFE function

// (function greeting(){
//     console.log("hello ji");
// })();

//or

// (()=>{
//     console.log("hello ji");
// })();

//callback function

function greet(){
    console.log("hello ji, kaise ho");
}
function meet(callback){
    console.log("i am going to meet someone");
    callback();
}
meet(greet);