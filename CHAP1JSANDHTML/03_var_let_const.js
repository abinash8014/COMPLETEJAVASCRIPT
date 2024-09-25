console.log("javascript tutorial 3:var,let and const");
var a = 123;
{
    var a = 23;
    console.log(a);
}
console.log(a); //go through the o/p you can find the demerits of var keyword

let beginner = 'abinash';
beginner = 'naresh';
console.log(beginner);//updating the value or overrinding the value 
// let beginner = "ram"; //we can't declare it again because it is a blocked scope variable 

const a = "abinash";
// {
//     a = 'ram';
//     console.log(a);
    
// } //here it is shoe error because const vars can't be overridden 
