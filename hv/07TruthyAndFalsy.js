/* truthy value and falsy value

falsy value - 
        0
        false
        ""- empty String
        null
        undefined
        -0
        0n
        NaN


 if we try to convert these falsy value in boolen it will returns false in console.


truthy values - 
        []- empty Array
        {} - empty Object
        true
        and all other string and number are truthy values


if we try to convert boolen of truthy values, it will return true in console. */



let n1 = "";
console.log(Boolean(n1));
n1 = 23
console.log(Boolean(n1));
n1 = 0;
console.log(Boolean(n1));
n1 = -0;
console.log(Boolean(n1));
n1= +0
console.log(Boolean(n1));
n1 = [];
console.log(Boolean(n1));
n1 = {};
console.log(Boolean(n1));
n1 = true;
console.log(Boolean(n1));
n1 = false;
console.log(Boolean(n1));
n1 = null;
console.log(Boolean(n1));
n1= undefined
console.log(Boolean(n1));
n1 = NaN;
console.log(Boolean(n1));

