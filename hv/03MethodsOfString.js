let name = "himanshu   n "


// method 1 - trim method       --.trim()
// trim method is use in js, to remove the whitespaces from start and end . no effect on the middle whitespaces. 
console.log(name.length);
console.log(name.trim().length)
console.log(name.trim())
console.log(name.length);


/*method 2 - .toUpperCase();
this method is use to change the string in uppercase or in caital Letters */

console.log(name.toUpperCase());

/* method 3 - .toLowerCase()
change the string alphabets into lowercase or in small letter.*/ 

let LName = "JOSHI"
console.log(LName.toLowerCase());
console.log(LName);

/* method 4 - slice  - this methos is use to slice of a part of string

syntax-
.slice(startingIndexNo. , EndingIndexNo.)
ending index element does not include in result
*/


console.log(name.slice(1,5));
console.log(name);



// any methods of string does not effect the orignal string , because string is immutable.  
//but we can store this modified value in other variable

