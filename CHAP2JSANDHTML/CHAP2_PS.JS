//1.USE LOGICAL OPERATORS TO FIND WHETHER THE AGE OF A PERSON LIES BETWEEN 10 AND 20
/*const age = prompt("enter your age");
if(age>=10 && age<=20){
    console.log("it lies between 10 and 20");  
}
else{
    console.log("it is not lies between 10 and 20");   
}*/

//2.DEMONSTRATE THE PRINCIPLE 0F SWITCHCASE STATEMENTSIN JS
/*let age = prompt('what is your age:')
age = Number.parseInt(age)

switch(age){
    case 12:
        console.log("your age is 12");
    case 13:
        console.log("your age is 13");
    case 14:
        console.log("your age is 14");
    case 15:
        console.log("your age is 15");
    case 16:
        console.log("your age is 16");
    default:
        console.log("your age is not special");  
}*/


//3.WRITE A JAVASCRIPT PROGRAM TO FIND WHETHER THE ENTERED NUMBER IS DIVISIBLE BY 2 AND 3
/*let num = prompt('enter the number:')
num = Number.parseInt(num);
if(num%2 == 0 && num%3 ==0){
    console.log("it is divisible by both 2 as well as 3")
}
else{
    console.log("it is not divisible by 2 and 3")
}*/

//4.WRITE A JS PROGRAM TO FIND WHETHER A ENTERED NUMBER IS DIVISIBLE BY EITHER 2 OR 3 
let num = prompt('enter the number:')
num = Number.parseInt(num);
if(num%2==0 || num%3 == 0){
    console.log("it is divisible by23 either 2 or 3");
}
else{
    console.log("it is not:(");
}

// 5.PRINT "YOU CAN DRIVE" AND "YOU CANNOT DRIVE" BASED ON AGE IS BEING GREATER THAN 18 USING TERNARY OPERATOR 
//EASY
