let btn1 = document.querySelector("#btn1");

// btn1.onclick =() =>{
//     console.log("btn1 wad clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside the box");
// };

// btn1.addEventListener("click",(evt) => {
//     console.log("button1 was clicked - handler1");
//     console.log(evt);
//     console.log(evt.type);
// });
// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
// });

//Q1)

let modebtn = document.querySelector('#mode');
let body = document.querySelector("body");
let currMode = "light";

modebtn.addEventListener("click", () => {
   if(currMode === "light"){
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
   }else{
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
   }   
    console.log(currMode);
});