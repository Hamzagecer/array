let names=['hakan','ali','serkan'];
let numbers=[26 , 30 ,34];
let choice="ali"

if(choice==="hakan"){
    console.log(numbers[0]+numbers[1]+numbers[2]);
}
else if(choice==="ali"){
    console.log((numbers[0]+numbers[1]+numbers[2])/3);
}
else if(choice==="serkan"){
    console.log(numbers[0]);
}
else{
    console.log("undefined expression");
}