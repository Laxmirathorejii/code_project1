const store = {
item1 : 10,
item2 : 20,
item3 : 30,
item4 : 40,

};
const exchangeRate = 80;
const newCost = Object.entries(store).map(([item, price]) => [
    item,
    price * exchangeRate,
]);