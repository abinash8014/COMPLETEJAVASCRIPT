//CREATE A VARIABLE OG TYPE STRING AND ADD A TRY TO ADD A NUMBER TO IT
const name = "abinash";
const a = 8014;
console.log(name+a);

//USE TYPEOF OPERATOR TO FIND THE DATATYPE OF THE STRING IN LAST QNS
console.log(typeof(name));

//CREATE A CONST OBJECT IN JS CAN YOU CHNAGE IT TO HOLD A NUMBER LATER 
const details = {
    name:"abinash",
    rollo:23,
    section : 1,
    isprincipal:false
}
// details = 45 //shows error 

//TRY TO ADD A NEW KEY TO THE CONST OBJECT IN PROGRAM3 WERE YOU ABLE TO DO IT 
details['age']=23;
console.log(details);//add a new keyvalue pairs 
details['name']="harekrishn";
console.log((details));//override the existed value 


//WRITE A JS PROGRAM TO CERATE A WORD-MEANING DICTIONARY OF 5 WORDS 
const dict = {
    love :"care",
    beautiful:"gorgeous",
    give:"provide",
    stair:"look",
    see:"watch"
}
console.log(dict);
console.log(dict.love);
console.log(dict['give']);




