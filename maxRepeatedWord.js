let str1="cat bat bat cat cat mat";
let arr=str1.split(" ");
let max=1
let min=1
let maxword=""
let minword=""
for(let i=0;i<arr.length;i++){
    let c=1;
    if(arr[i]==" ") continue;
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            c++
            arr[j]=" "
        }
    }
    if(c>max){
        max=c
        maxword=arr[i]
    }
    if(c==min){
        min=c;
        minword=arr[i]
    }
  
}
console.log(maxword,max);
console.log(minword,min);

