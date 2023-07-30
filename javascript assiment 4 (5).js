const numbers =[5,2,7,1,9];
const map = new Map();


    const minmax = (elements) =>{
        map.set("max",Math.max(...elements));
        map.set("min",Math.min(...elements));

    }
    minmax(numbers);
    console.log(map);
