// function getData(dataId, getNextData){
//     //2s
//     setTimeout(() =>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }
// //nested callbach hell
// getData(1, () =>{
//     getData(2, () =>{
//         getData(3, () =>{
//             getData(4);
//         });
//     });
// });


//promises


// let promise = new Promise((resolve, reject)  =>{
//     console.log("I am a promise");
//     reject("some error occurred");
// });


// function getData(dataId,getNextData){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });

// }

//asyncfunction


function asyncfunction(){
    return new Promise((resolve, reject ) =>{
        setTimeout(() =>{
            console.log("some data1");
            resolve("success");
        }, 4000);
    });
}

console.log("fetching data1...");
let p1 = asyncfunc();
p1.then((res) =>{
    console.log(res);
});