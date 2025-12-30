//object
//key value 

// const user = {
//     name: "Rohit",
//     age: 20,
//     amount: 3400 
// }
// console.log(user);
// console.log(typeof user);
// console.log(user.age);

//to insert in object

// user.aadhar = 12443;
// user.amount = 4000;
// console.log(user);

//to delete in object

// delete user.amount;
// console.log(user);

// const user = {
//     name: "Rohit",
//     age: 20,
//     amount: 3400 
// }

// const user2 = user;
// user2.age = 40;
// console.log(user);

//srif keys chahiye

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


//nested object

const user = {
    name: "Rohit",
    age: 20,
    amount: 3400 ,
    address: {
        city:"bokaro",
        state:"jharkhand"

    }
}
console.log(user.address.city)
