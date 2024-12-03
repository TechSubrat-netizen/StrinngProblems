let str = "hello World";
let temp = "";
for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + 3) === "llo") {
        temp += "XX";
        i += 2; 
    } else {
        temp += str[i];
    }
}

console.log(temp);

