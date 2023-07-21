
let percentageofdiscount = (product) => {
    let discount = 100 - (product.discountprice / product.orignalprice)*100;
    return discount.toFixed(2);
}
let product1 = {orignalprice : 400 , discountprice : 400 }; 
let discount =  percentageofdiscount(product1);
console.log(discount)