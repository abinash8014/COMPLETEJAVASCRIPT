// Loops :-
// 1.For loop :
// for(let i=1;i<=5;i++){
//     console.log("Krishna");
// }
// sum of first 5 numbers using for loop
// let sum =0;
// for(let i=1;i<=5;i++){
//     sum = sum+i;
// }
// console.log("sum is",sum);

//while loop
// let i=1;
// while(i<=5){
//     console.log("krishna");
//     i++;
// }

//do-while loop
// let i=1;
// do{
//     console.log("krishna");
//     i++;
// }while(i<=5);

//for-of loop
// let str="abinash";
// let size =0;
// for(let i of str){//iterator -> characters
//     console.log("i=",i);
//     size++;
// }
// console.log("string size =",size);

//for-in loop
// let student ={
//     name:"abinash",
//     age:23,
//     cgpa:7.6,
//     ispass:true
// };
// for(let key in student){
//     console.log("key =",key , "value =",student[key0po0p]);
// }

// practice set about the loops :Q1-print all the even  numbers from 0-100..
// console.log("numbers are :");
// for(let i =0;i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }
//Q2. CREATE A GAME WHERE YOU START WITH ANY RANDOM GAME NUMBER.ASK THE USER TO KEEP GUESSINFG THE GAME NUMBER UNTILL THE USER ENTERS CORRECT VALUE.
// let gamenum = 25;
// let userNum = prompt("guess the game number :");
// while(userNum != gamenum){
//     userNum=prompt("you entered the wrong number!Guess again");
// }
// console.log("congratulations ! you entered the right number");


//STRINGS IN JAVASCRIPT :::::::
// let str="abinashsahoo";//creating a string 
// let str2='abinashsahoo';//another method
// console.log(str2.length);//string length
// console.log(str[5]);//string indices
// console.log(str.charAt(2));//character at which position

//Template literals
// let specialstring = `This is a template literal`;
// console.log(typeof specialstring);
// let obj = {
//     item : "pen" ,
//     price : 10 ,
// };
// console.log("The cost of", obj.item ,"is" ,obj.price ,"rupees");//normally
// let output = `The cost of ${obj.item} is ${obj.price} rupees`;//template literals or string interpolation
// console.log(output);

// escape sequence 
// let abinash = "hare\nKrishna";//\n
// let ayushi = "ram\tram";//\t
// console.log(abinash);
// console.log(ayushi);

//string methods :
// let str = "harekrishna";
// let str2 = "  HARE KRISHNA         ";
// let str3 = "madhav"
// console.log(str.toUpperCase()); //touppercase()
// console.log(str2.toLowerCase());//tolowercase()
// console.log(str2.trim());//trim()->remove all the white spaces which are present at the start and end of the string ..
// console.log(str.slice(0,3));//returns a part of string 
// console.log(str3.concat(" ", str));//merge two strings 
// console.log(str3.replace("m","R"));//repklace with a new char or val
// console.log(str.charAt(2));//gievs at which position the character is placed 
//STRINGS ARE IMMUTABLE MEANS WE CAN'T DIRECTLY CHANGE THE STRING VALUES WITH A NEW .

//PRACTICE SET :Q1 ->PROMPT THE USER TO ENTER THEIR FULL NAME.GENERATE A USERNAME FOR THEM BASED ON THE INPUT.START USERNAME WITH @ , FOLLOWED BY THEIR FULLNAME AND ENDING WITH THE FULLNAME LENGTH.

// let fullname = prompt("enter your fullname");
// let username = `@${fullname}${fullname.length}`;
// console.log(username);