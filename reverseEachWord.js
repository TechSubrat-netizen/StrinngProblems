let str="Wow she is fucking beautiful"
str=str.split(' ')
for(let i=0;i<str.length;i++){
    str[i]=str[i].split('').reverse().join('')
}
console.log(str.join(' '));

