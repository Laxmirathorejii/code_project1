function CelsiusToFahrenheit(celsius){
    let fahrenhit = (celsius * 1.8) + 32;
    return fahrenhit;
}

let celsius = 39;
let fahrenhit = CelsiusToFahrenheit(celsius);
console.log(fahrenhit);