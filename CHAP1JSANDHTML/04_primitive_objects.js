// nn bb ss u primitive datatypes
let  a = null;
let b = 344;
let c = true;//can also be false
let d = BigInt("565") + BigInt('5');
let e = "abinash";
let f = Symbol("i am a nice symbol");
let g = undefined;// or it is not necssary to mention the variable as undefined 
console.log(a,b,c,d,e,f,g);
console.log(typeof(c));

//Non-primitive datatypes
// Objects in js 
const items = {
    "abinash":true,
    "deepak":false,
    "mahesh":78,
    "abhijit":undefined
}
console.log(items["abinash"]);//key value pairs 
