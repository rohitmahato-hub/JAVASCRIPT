//function

// function sum(a,b){
//     console.log(a+b);
// }
// sum(6,7);


// function sum(a,b){
//     s = a+b;
//     return s;
// }
// let val = sum(3,5);
// console.log(val);


//arrow function
// const arrowSum = (a,b) =>{
//     console.log(a+b);
// };
// arrowSum(4,6);


//question

//  function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char ==="e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     console.log(count);
//  }
//  countVowels("rohit");

//arroe function
 let countVowels = (str) =>{
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char ==="e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
 };
 countVowels("rohit");