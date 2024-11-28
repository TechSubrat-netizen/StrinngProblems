//using forloop
function isPalindrome(string){
   let str=string.toString();
   let j=str.length-1
    for(let i=0;i<str.length/2;i++){
        if(str[i]!=str[j]){
            return `${str} is not palindrome`
        }
        j--;
        return `${str}is  palindrome`
    }
}
console.log(isPalindrome("Akash"))
//using reverse method
function palindrome(str){
    let string=str.toString();
    let rev=string.split('').reverse().join("")
    if(rev==string){
        return `${str} is palindrome`
    }
    return `${str} is not palindrome`
    
}
console.log(palindrome(1215));