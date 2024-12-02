let str= "aadith is a good  boy";
let temp=""
for(let i=0;i<str.length;i++){
    if(str[i]=='o'){
        temp+="@"
    }
    else{
        temp+=str[i]
    }
    
}

console.log(temp);
