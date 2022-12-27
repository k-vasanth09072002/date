// const d= new Date();
//  d.setTime(12);
 

// if(d>5.00&&d<=9.00){
//     console.log("moring");
// }
// else if(d>11.00&&d<=16.00){
//     console.log("afternoon");
// }
// else{
//     console.log("night");
// }
// console.log(d);



const b= new Date();
let n=b.setTime(parseInt(prompt("enter time")));

if(n>5.00&&n<=10.00){
    document.write("moring");
   
}
else if(n>10&&n<=16.00){
    document.write("afternoon");
}

else {
    document.write("night");
}
