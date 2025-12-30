// let marks1 = 100;
// let marks2 = 50;
// let marks3 = 70;
// let marks4 = 80;

// console.log(marks1,marks2,marks3,marks4);

// let marks = [100,50,70,80,90];
// console.log(marks);
// console.log(marks.length);

//push  to add somthing in array
  
// let arr = [100,50,80];
// arr.push(90);
// arr.push("strike");
// console.log(arr);

//pop  ot delete something in array

// let arr = [100,50,80];
// arr.pop();
// console.log(arr);


//unshift  stsrting me add karna 

// let arr = [100,50,80];
// arr.unshift(10);
// console.log(arr);

//shift  starting me delete karna 

// let arr = [100,50,80];
// arr.shift();
// console.log(arr);

//another method for loops

// let arr = [10,30,50,90,11];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//or

// for(let num of arr){
//     console.log(num);
// }

//splice 
// let arr = [10,30,50,90,11];
// const arr2 = arr.splice(2,4);
// console.log(arr);


//slice 
// let arr = [10,30,50,90,11];
//  const arr2 = arr.slice(2,4);
// console.log(arr2);


//concat

//  const arr = [10,30,50,90.11];
//  const arr2 = ["rohit",11,true];
//  const arr4 = [90,4,false];
// // const arr3 = arr.concat(arr2,arr4);
// console.log(arr3);

//or  by spread operator

// const arr3 = [...arr,...arr2,...arr4];
// console.log(arr3);


//join  

// const names = ["alice","bob","charlie"];
// console.log(names.join("-"));
// console.log(names.join(","));
// console.log(names.join("+"));

//sorting  ascending, reverse,descending order me change karna

// const names = ["alice","rohit","bob","mohit","charlie"];
// //names.sort();
// names.reverse();
// console.log(names);

//3-D array

const arr = [10,30,50,[40,90,[60,19,99],11],80];
// console.log(arr[3][2][1]);

//anotheer method  name flat

const arr2 = arr.flat(Infinity);
console.log(arr2);