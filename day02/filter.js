// forEach, filter, reducer, map, set

// const arr = [10,20,30,5,90,87];
// let sum = 0;

// arr.forEach((number)=>{
//     sum+=number;
// })

// console.log(sum);


// let obj = {
//     name:"Rohit",
//     deposit: function(amount){
//         console.log(amount);
//     }
// }

// obj.deposit(100);

// filter

// const arr = [10,20,30,5,90,87];
// true: select, false: not selected
// const newArr = arr.filter((number)=> number>25);

// console.log(newArr);
// this = [10,20,30,5,90,87];

// const compare = (number)=> number>25;
// compare(20);

// Array.prototype.filtering = function(compare){
    
//     const ans = [];
//     for(let num of this){
//        if(compare(num)){
//         ans.push(num);
//        }
//     }

//     return ans;
// }

// const newArr = arr.filtering((num)=>num>25);

// console.log(newArr);

// const a = [80,30,15,31,42,70]
// const answer = a.filtering((num)=>num>25);
// console.log(answer);


// const arr = [10,20,30,5,90,87];


// const newArr = arr.map((num)=> num*3);
// console.log(newArr);


// Data structure: set

// const arr = [10,20,30,10,25,15,10,20];
// // console.log(arr);

// const s1 = new Set(arr);
// s1.add(11);


// console.log(s1.has(23));
// s1.delete(10);
// s1.clear();
// console.log(s1);


// const email = ["ro@gm","ra@gm","mo@gm","ro@gm"];

// // const uniqueEmail = [...new Set(email)];
// // console.log(uniqueEmail);

// const s1 = new Set(email);

// for(let num of s1){
//     console.log(num);
// }


// map;
const m1 = new Map([
    ["Rohit", 40],
    [2, "Rohit"],
    [true, 11],
    [[10,30,11], "Mohit"]
]);


m1.set({name:"Manish",age:20}, false);

// console.log(m1.size);

for(let [keys,value] of m1){
    console.log(keys, value);

}