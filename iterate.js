let college="Gandhi institute for education and technology"
for (let i=0;i<college.length;i++){
console.log(college[i]);
}
//using for of loop
for(const char of college){
    console.log(char)
}
//using for each loop
college.split('').forEach((char) => console.log(char));
//using while loop
let j=0;
while (j<college.length){
console.log(college[j]);
j++;
}
