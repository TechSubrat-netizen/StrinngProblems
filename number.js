let str="Dhruva20@java32gmail.com";
let sum=0
for(let i=0;i<str.length-1;i++){
    for(let j=i+2;j<str.length;j++){
        let val=str.slice(i,j)
        if(val>=0){
            sum+=Number(val)
        }
    }
}
console.log(sum);
// Another way
let s1="Dhruva12@40gmail"
let s=0;
let temp=""
for(let i=0;i<s1.length;i++){
    let ch=s1.charAt(i)
    if(ch>='0' && ch<='9'){
        temp+=ch
    }
    else{
        if(temp!=""){
            let num=Number(temp)
            s+=num
        }
    }
}
console.log(s);

