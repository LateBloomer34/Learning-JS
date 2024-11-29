// array is the collection of element,

// raference datatype -  or non primitive datatype- we can modifiy the value of array

// array are mutable - we can modify the array

// array is the ordered collection of Elements.- means it have a index 

let a = [1,2,3,4,5,"him", "ram","shyam"]
for(let i = 0 ; i < a.length ;i++){
    console.log(typeof a[i]);
}



// to print only numbers from an array 


for (let i = 0 ; i < a.length; i++){
    if (typeof a[i] === "number" )
        console.log(a[i]);
        
}


a[2]= "samay"
console.log(typeof a);


// to check array or not
console.log(Array.isArray(a))