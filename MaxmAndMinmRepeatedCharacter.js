let s1="banana"
let arr=[...s1]
let max=0;

let maxChar=""
let minChar=""
for(let i=0;i<arr.length;i++){
    let count=1
    if(arr[i]==' ')continue
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++
            arr[j]=" "
        }
    }
  if(count>max){
    max=count
    maxChar=arr[i]
  }
    
}
console.log(`${maxChar}:${max}`);
console.log(`${minChar}:${min}`);


