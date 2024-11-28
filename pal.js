let str="mom"
let res=""
for(let i=str.length-1;i>=0;i--){
    res+=str[i]
}
if(str==res){
    console.log("palindrome number");
    
}
else{
    console.log("its not palindrome nu,mber");
    
}
// or// optimize approach  :- Here number of iteration will be lessi
function isPalindrome(str){
    let i=0;
    let j=str.length-1
    
    while(i<j){
        if(str[i]!==str[j])return false
        i++
        j--
    }
    return true
}
console.log(isPalindrome("akA"));
