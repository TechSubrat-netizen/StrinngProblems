let str="Dhruva@12345java6ript"
let sum=0;
for(let i=0;i<str.length;i++){
    if(str[i]>=0){
        sum+=Number(str[i])
    }
}
console.log(sum);
// Other way
let s=0;
let str1="Dhruva@12345java6ript"
for(let i=0;i<str.length;i++){
    let ch=str1.charAt(i)
    if(ch>'0'&& ch<='9'){
        s+=Number(ch)
    }
}
console.log(s);
