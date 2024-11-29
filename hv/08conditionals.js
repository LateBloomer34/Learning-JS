 let age = 4;

 if (age >18){
    console.log("can play");    
 }
else{
    console.log("can not play");
    
}


/* if condition true, only if block runs,
otherwise else block run*/



// programe to find even and odd number 


let num = 0;

if (num%2==0){
    console.log("number is even");    
}
else {
    console.log("odd number");    
}


/*using nested if else create a programe to gusss a number and give op-
conditons - 
winning number - 19
if number more than 19 , display you entered 19 and number is too Highlight

is less - number is lesss and low


if qeual - print you entered and ServiceWorkerContainer.*/


let num1 = 20;
let winning = 19

// if (num1===winning){
//     console.log(`you entered ${num1}, and you are winner`);
    
// }
// else if(num1<winning){
//     console.log(`you entered ${num1}, and your number is low`);
// }
// else{
//     console.log(`you entered ${num1}, and your number is high`);
// }



// we can also write if condition inside else folder 

if (num1 == winning){ 
    console.log("winner");
}
else{
    if(num1<winning){
        console.log("lesser");
    }
    else{
        console.log("higher");
    }
}


/*create a prog  -  
if temp is less than 0 - extrem closed
if temp <16 - cold outside 
if temp < 25  - ok 
if <35 - go for swim 
if temp <45 - turn on Ac
other - too hot */

let temp = 16;

if (temp < 0){
    console.log("extreme cold");
}
else if (temp < 16){console.log("cold outside")}
else if (temp < 25){console.log("ok temp")}
else if (temp < 35){console.log("go for swim")}
else if (temp < 45){console.log("turn on AC")}
else {console.log("too hot")}




//switch case 


/*print day acco ring to number 
day 0 - Sun 
day 7 - saturday*/


let day = 5;

switch (day){
    case 0 : console.log("sunday");break;
    case 1 : console.log("monday");break;
    case 2 : console.log("tuesday");break;
    case 3 : console.log("wednesday");break;
    case 4 : console.log("thursday");break;
    case 5 : console.log("friday");break;
    case 6 : console.log("saturday");break;
    default : console.log("not appli");

}