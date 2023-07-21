function toUpperCase(names) {
    return (names.charCodeAt(0))
    ? names = String.fromCharCode(names.charCodeAt(0)-32) + names.slice(1)
    : names;
}

let names = "shivi";
names = toUpperCase(names);
console.log(names);