let s1="aabbcdeeff"
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
    if(count==1){
        console.log(arr[i]);
        break;
        
    }
   
    
}