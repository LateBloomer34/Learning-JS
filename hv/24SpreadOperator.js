// to access  

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr =[]
// let arr = [arr1, arr2]
console.log(arr);
arr = [...arr1, ...arr2] //array concationate using spread operator
console.log(arr);

 console.log(arr.concat(arr1,arr2))



//  string is itterable
// but number are bot itterale

let nwArr = [..."12345678"]
console.log(nwArr);  
neArr = [..."abkdsjhk"]
console.log(neArr);



//  spread operator in objects
// same methos as array 

// key are unique in Array, if same key comes it will update the value 
const ob1 = {
    key1 :"asa",
    key2 :"bsa"
}

const ob2 = {
    key1 : "nsas",
    key4 :"mdas"
}

const ob = {...ob1, ...ob2}
console.log(ob);


