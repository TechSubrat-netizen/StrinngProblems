function isPalindrome(str){
    let i=0;
    let j=str.length-1;
    while(i<j){
        if(str[i]!==str[j]){
            return false
        }
        i++
        j--
    }
    return true
}
let str="malayalam";
let maxLength=0;
let output=""
for(let i=0;i<str.length-1;i++){
    for(let j=i+2;j<=str.length;j++){
        let word=str.slice(i,j);
   if(isPalindrome(word)){
let len=word.length;
if(len>maxLength){
    maxLength=len
    output=word
}
    
   }
       

    
    }
}
console.log(maxLength);
console.log(output);

