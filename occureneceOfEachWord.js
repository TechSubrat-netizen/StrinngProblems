 let str="madam you are very beautiful madam you are so funny";
 let map= new Map()
let words=str.split(" ")
words.forEach(word=>{
    if(map.has(word)){
        map.set(word,(map.get(word)||0) +1)
    }
    else{
        map.set(word,1)
    }
})
for(let [key,val] of map){
    console.log(`${key}:${val}`);
    
}



