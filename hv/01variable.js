/* variable is used to store some info.
we can use/modify this info later
we can create the varibale using let, var and const keyword. */
"use strict" // with use of "use strict" we can not initillize any variable without initilize keyword.
var value = 50;
/* here  - 

var keyword -

var is the keyword to create variable
value is the variable name;
50 is the value which stores in variable.*/


/* we can create variable using let var and const keyword. 
varible created using const keyword is not modified/update after cretaion.*/

/* ---------naming convention for variable
 1- must be starts with alphabets, _ and  $ sign only , other are not allowed.
 2-cannot starts with number. but number can use in middle or in last.
 3-variblae name is caseSensitive . name and Name both variable are different.
 4- space can not use between variable name.
  (try to write in camelcase ans start with small letter)
 
 */
 let name = 5;
 name = 10;
 console.log(name);
 
/* let keyword

using let variable can reassign but can not redeclear
ex => 
    let name = "himanshu"
    name = "raju"   //  works

    let name = "imanshu"
    let name = "raju"       //not correct */


/* const-

not reinitize or not redeclear

const name = "himanshu";
name = "raju";      ---- not correct
const name = "raju";    ---- not correct 
value of const are fixed 



the main difference between let var and const is 

var - redeclear and reinitilize ,  global scope.
let - redeclear but can not reinitilize , local scope.
const -  neither redeclear or not reinitilize. local scope
*/
    const nam = "man"
    console.log(nam)