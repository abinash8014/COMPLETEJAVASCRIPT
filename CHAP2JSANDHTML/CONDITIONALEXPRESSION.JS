// CONDITIONAL EXPRESSSIONS
// 1.SIMPLE IF 
// 2.IF-ELSE STATEMENT 
// 3.IF...ELSE IF...ELSE STATEMENT

// let a = console.log(prompt("enter your name:"));//taking user input
// let b = alert("name") //provide a alert

//IF-ELSE STATEMENT AND SIMPLE IF STATEMENT 
let a = prompt('enter your age:');
a = Number.parseInt(a)//converting the string into a number(TYPECASTING)
// console.log(typeof a);
// if(a>0){
//     alert("this is a valid age")
// }
// else{
//     alert("this is not a valid age")
// }

//IF...ELSE STATEMENT IF..ELSE STATEMENT
// MULTIPLE IF ELSE STATEMENTS ARE PRESENT IN A SINGLE CODE
if(a<0){
    alert("this is an invalid age")
}
else if(a<9){
    alert("you are a kid!")
}
else if(a>=9 && a<18){
    alert("you can think of driving but cannot drive")
}
else if(a>=18 && a <= 50){
    alert("you can drive now!")
}
else{
    alert("you got old so it is not safety to drive")
}



//TERNARY OPERATOR 
const age = prompt("enter your age:");
console.log("you can",age<18?"not eligible for vote":"eligible for vote");
