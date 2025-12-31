// Scope and closure , HOF
// Global_> Accessible to everyone
// functional -> accesible only to that function
// Block level scope-> accesible only to that Block

// let a = 10;
// const b = 20;



// if(true){
//     let d = 30;
    
// }

 

// function greet(){

//     let c = 30;
//    var e = 90;
// }

// // console.log(c);
// console.log(e);
// greet();


// let global = 30;


// function greet(){
     
//     let global = 40;
   

//     function meet(){
//         let global = 10;
//         console.log(global);
//     }
    
//     meet();
// }

// greet();





// let balance = 500;





// let balance = 500;
// // private

// let user = {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
    
// }

// balance="Rohit"

// user.balance="Rohit";
// console.log(user.getBalance());

// method ko access(function)
// balance: usko directly access na


// function createBankAccount(){

//     let balance = 500;
    
//     return {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
    
//     }

 
// }





// const customer = createBankAccount();
// console.log(customer.withdraw(200));


// Higher order function


function double(value){

    return function execute(num){
        return num*value;
    }
    
}

const n = double(20)(5);
console.log(n);
