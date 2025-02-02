let a = 7;
let b = a;
a++;
console.log(a);
console.log(b);

// refrence type
// if we change in arr1 - arr2 also modified in non primitive type;

let arr1 = ["it1 ", "it2"]
let arr2 = arr1;

arr1[0] = "it0"
console.log(arr1);
console.log(arr2);

// here also change in arr2 in case of non primitive or reference type


// explanation - primitive type are store in stack
// refrence type  store in heap 


/* stack store local variable and function call, while heap store object and class inheritances
    -   stack are faster than heap
    -   stack is short lived while heap memeory stored till end of application   */
console.log(arr1===arr2);


