// let price = [250,645,300,900,50];
// let i = 0;
// for(let val of price){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     price[i] = price[i]-offer;
//     console.log(`value after offer = ${price[i]}`);
//     i++;
// }


let price = [250,645,300,900,50];
for(let i=0;i<price;i++){
    let offer = price[i] / 10;
        price =-offer;
}
console.log(price);