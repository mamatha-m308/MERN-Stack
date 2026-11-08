//if statement
if(3<8){
    console.log("hii");
}else{
    console.log("hello");
}

//else if statement
let number=3;
if(number==1){
    console.log("number is 1");
}else if(number ==2){
    console.log("number is 2");
}else if(number==3){
    console.log("number is 3");
}else{
    console.log("number not valid");
}

//TERNARY OPERATOR

let num=8;
let result;
if(num%2==0){
    result="even"
}else{
    result="odd"
}                  

result=num%2==0? "Even":"odd"   //instead of above code we use this in ternary
console.log(result)

//SWITCH STATEMENT
let day="monday";
switch(day){
    case "monday":
        console.log("8 am");
        break;
    case "tuesday":
        console.log("8 am");
        break;
    case "wednesday":
        console.log("8 am");
        break;
    default:
        console.log("not a valid weekday ");

}

//TEMPLETE LITERAL in javascript
let name="mamatha"
console.log("hii "+name+" good morning")
console.log("hii ${name} good morning")