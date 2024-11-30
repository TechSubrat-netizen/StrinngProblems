let str="aakash"
let set= new Set()
let res=""
for(let i=0;i<str.length;i++){
    if(!set.has(str[i])){
        set.add(str[i])
        res+=str[i]
    }
}
console.log(res);
