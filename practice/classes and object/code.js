// const student ={
//     fullName: "rohit mahato",
//     marks: 98.9,
//     printMarks: function (){
//      console.log("marks = ", this.marks);
//   },
// };

//classes

// class ToyotaCar {
//     start(){
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }
// }
// let fortuner = new ToyotaCar();


//inheritance

// class parent {
//     hello() {
//         console.log("hello");
//     }
// }
// class child extends parent{}
// let obj = new child();


// class Person {
//     constructor() {
//         this.species = "homo sapiens";
//     }
//     eat() {
//         console.log("eat");
//     }
// }
// class Enginner extends Person{
//     constructor(branch){
//         super();
//         this.branch = branch;
//     }
//     work(){
//         console.log("solve problems, build somrthing");
//     }
// }
// let engObj = new Engineer("chemical engg");

//Q1

let DATA = "secret information";

class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data = ", DATA);
    }
}
let student1 = new User("shradha", "abc@email.com");
let student2 = new User("shradha", "rohit@email.com");
let teacher1 = new User("shradha", "dean@email.com");