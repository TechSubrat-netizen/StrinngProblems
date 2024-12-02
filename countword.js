let str1="madam is very beautiful madam speaks malalayalam";
let arr=str1.split(" ");
for(let i=0;i<arr.length;i++){
    let c=1;
    if(arr[i]==" ") continue;
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            c++
            arr[j]=" "
        }
    }
    console.log(arr[i],c);
}