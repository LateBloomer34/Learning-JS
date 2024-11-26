/* basically 2 dataTypes in JSON
 1- primitive
 2- Non primitive

 1- primitive - 
    - Number
    - String
    - boolean
    - undefined
    - null 
    - symbol 
    - BigInt

2- NonPrimitive also known as derived or reference data type- 
    - Object
    - array 
    */
    
// method of DataType- to check the type 

let age = 34;
console.log(typeof (age));


let name = "himanshu"
console.log(typeof name);

let value = true;
console.log(typeof value);

value = undefined;
console.log(typeof value);

value = null
console.log(typeof value);
//type of null is  - object

value = 111122478923487920327893091232948246n
value = BigInt(111122478923487920327893091232948246)
console.log(typeof value);

// for BigInt-  we can create BigInt in the strt of a number or we can type n in the end of a number.
let n1 = 12 
let n2 = 23n
console.log((n1+ Number(n2)))

// bigInt can not convert n number using + , need to erite Number keyword before BigInt.


/* to change one DataType into another
1- string into number*/
// 1- add +sign befor varibale name or befor value 
// 2- using Number before the variable name or value


let value1 = "34"
console.log(value1);
console.log(typeof value1);
console.log(typeof +value1);

let val = "25";
console.log(val);
console.log(typeof Number(val))
console.log(val)


/*2- number into String
to convert number into string , we can add +" " after the string

methos 2 - write String(variableName) */

let num = 37;
console.log(typeof num);
num1 = num +""
console.log(typeof (num));
console.log(typeof (num1)); //


let number = 989;
console.log(typeof String(num));
 

const cityCode = 262523;
console.log(cityCode);
console.log(typeof String(cityCode));
 

// 3- boolean - true or false are the boolean value .

let result = true
console.log(result , (typeof result));



// 4- undefined - value not defined now , may be defined in future.
// varibale created but not assigned value 

let Name; 
console.log(Name);
Name = 56;
console.log(Name);


// 5- Null - noting present or empty value 


let Val = null; 
console.log(Val, typeof Val)
Val = 67;
console.log(Val);









