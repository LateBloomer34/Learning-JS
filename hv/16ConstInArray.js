// in case of variable created using constKeyword we can not be redeclear or assign, 

// but in case of object or array  we can modify the value but can not redeclear the array.

const arr1 = [1,2,3,4,5];
arr1.push(6)
console.log(arr1);

// this is all beacaure of , array stores in heap memory. 
// and varibale are primitve , array and objects are non primitive.

// always try to create an array using const keyword. 