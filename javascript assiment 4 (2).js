const number = [1,2,3,4,3,2,1];
const uniqueItems = (numbers) =>
{
 const myset = new Set (numbers);
 return myset;

};
const myset = uniqueItems(number);
console.log(myset);
