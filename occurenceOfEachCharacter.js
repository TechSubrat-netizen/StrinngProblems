let str="aakashh"
let map= new Map()
for(let i=0;i<str.length;i++){
    if(map.has(str[i])){
      map.set(str[i],map.get(str[i])+1)
    }
    else{
        map.set(str[i],1)
    }
    
}
for(let [key,value] of map){
    console.log(`${key}:${value}`);
    
}
//  anothe way
let s1="banana"
let arr=[...s1]
for(let i=0;i<arr.length;i++){
    let count=1
    if(arr[i]==' ')continue
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++
            arr[j]=" "
        }
    }
    console.log(`${arr[i]}=${count}`);
    
}



