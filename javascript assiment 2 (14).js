let  calculateFinalOrderPrice = (cart) => {
    let totalcost = 0;
    for (let i = 0; i<cart.length ;i++){
     totalcost += (cart[i].unitprice*cart[i].quantity);
    
    }
  return totalcost;
}
 let potato = {unitprice : 18 , quantity : 4};
 let tomato = {unitprice : 20 , quantity : 5};
 let pea  =    {unitprice : 16 , quantity : 3};
 let cart = [potato,tomato,pea];

 let totalcost =  calculateFinalOrderPrice(cart);
 console.log(totalcost);