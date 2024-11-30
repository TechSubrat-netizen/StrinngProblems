let str="Dhruvadj123@+-*/"
let vowel="aeiouAEIOU"
let consonant="bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
let vowelCount=0;
let consonnatCount=0
for(let i=0;i<str.length;i++){
    if(vowel.includes(str[i])){
        vowelCount++
    }
    else if(consonant.includes(str[i])){
        consonnatCount++
    }     
}
console.log(vowelCount);
console.log(consonnatCount);
// or 
let v=0;
let c=0;
str=str.toLocaleLowerCase()
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i)
    if(ch>='a'|| ch<='z'){
        if(ch=='a'||ch=='e'|| ch=='i'||ch=='o'||ch=='u'){
            v++
        }
        else{
            c++
        }
    }
}
console.log(v,c);




