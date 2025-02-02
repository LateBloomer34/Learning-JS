// array are non premitive , so cloning done 


let arr1 = [1,2,3,4,5];
let arr2  = [];
arr2 = arr2.concat(arr1);
console.log(arr2);
console.log(arr1===arr2); //return false 



// best and latest method -  use the spread operator 


let arr3 = [...arr1]
console.log(arr3);
console.log(arr1===arr3);


// task - create an array with array1 element and some extra element

let arr4 = [9 , 8 , 7 , 6]
arr4= [arr4 , ...arr1]
console.log(arr4);

let arr5 = [...arr1 , "1","2","3"]
console.log(arr5 );



//create a copy of an array and change element in capital letters.


let ar1 = ["apple", "ball", "cat", "dog", "egg", "fox"];



let ar2 = [];

for (let i = 0 ; i < ar1.length; i++){
    ar2.push(ar1[i].toUpperCase())
}

for (let i = 0 ; i < ar2.length ; i ++){
    console.log(ar2[i]);
    
}



