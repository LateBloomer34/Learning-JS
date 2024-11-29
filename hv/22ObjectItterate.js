let obj = {
    name:"india",
    capital:"delhi",
    state:"28"
}
console.log(obj);

// we can access keys of object using for in loop 
for (let key in obj){

    console.log(key ,": ", obj[key]);
    // we can not acceess it using . notation because key name key is not available inside the obj object
}

// using for of loop


for (let key of Object.keys(obj)){
    console.log(key , ": ",  obj[key]);
    
}