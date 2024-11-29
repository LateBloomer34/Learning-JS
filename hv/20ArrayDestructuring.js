const arr = [1,2,3,4,4,5];

// if we wants to store elment of arr in diffent diff variable. the basic method is use 

let  [x,y,...z] =  arr;
console.log(x);
console.log(y);
console.log(arr);
console.log(z[1]);


let [a,,b] =arr;
console.log(a);
console.log(b);


//rest value store in  any array using rest operator

// now we can use x and y as normal variable

// only available in js 


 