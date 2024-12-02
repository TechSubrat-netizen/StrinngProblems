function isAnagaram(str1,str2){
    if(str1.length!=str2.length)return false
    for(let i=0;i<str2.length;i++){
         if(str1.includes(str2[i])){
            return true
         }
         else{
            return false
         }
    }
}
console.log(isAnagaram("race","care"));
// another way
function Anagram(str1,str2){
    if(str1.length!=str2.length)return false
    while(true){
        if(str1.length==0 && str2.length==0)return true
        else if(str1.length==0 || str2.length==0) return false
        let ch= str1.charAt(0);
        str1=str1.replace(ch,"");
        str2=str2.replace(ch,"")

    }
}
console.log(Anagram("rice","care"));
