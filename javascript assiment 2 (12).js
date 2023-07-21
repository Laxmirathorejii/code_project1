function costofRent(numberofdays , typeofcar){
    switch(typeofcar){
    case "economy":
        return (4000 * numberofdays);
    
   case "midsize":
    return(100000 * numberofdays);
    
   case "luxury":
    return(20000 * numberofdays);

    default:
        console.log("invalid car type");
}
}
let numberofdays = 6;
let typeofcar = "luxury";
let rent = costofRent(numberofdays, typeofcar);
console.log(rent);