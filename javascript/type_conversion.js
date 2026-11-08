//TYPE CONVERSION
let num=Number("123")
console.log(num,typeof num);


let x=8;
x=8+" "
console.log(x,typeof x)  //Here we try to add number with string so, the type will converted into string bcz of coersion
x=x-2
console.log(x,typeof x)//the type again become number bcz we subtracting string with number
 x=!x
console.log(x,typeof x)

console.log(Boolean(0))   //false
console.log(Boolean(2))   //true
console.log(Boolean(-3))  //true

let a=parseInt("123 mamatha")// The parseInt is the special function. if the string start with a number  then only it converts string into number
console.log(a);       //output: 123