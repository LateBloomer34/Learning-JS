//how to find the character at a any index 


let name = "himanshu"
// console.log(name[0]);
for (let i = 0 ; i <name.length ; i++){
    console.log(name[i].toUpperCase(), " at index ", i);
}


//to find length of string - use the .length method 


console.log(name.length)


// to get last index of String

console.log(name[name.length-1]);


//to find the index of any character

console.log(name.indexOf("hu"));
