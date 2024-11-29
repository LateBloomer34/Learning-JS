/* object store data in key value pair
means value access using keys of object.
object doeen't have index 
object are reference type , non primitive
store in heap
we can modify the value inside the object


keys known as properties.
*/


const obj = {
    firstN : "him",
    secondN : "raj"
}

// access the keys in Object
// 1- using dot notation (.)

console.log(obj.firstN);

//using bracket notation

console.log(obj["firstN"]); //to access key of object always use the " " in key name in case of bracket notation



// add key value in obj
obj.thirdN = "hn"
console.log(obj)
console.log(obj.thirdN);

// update value in obj
obj.firstN = "cham"

console.log(obj);
console.log("type of obj is", typeof obj);

// array inside in Object

const person = {
    name : "him",
    lName: "nar",
    hobbies : ["learning", "playing"]

}
console.log(person);
console.log(person.hobbies);
console.log(person.hobbies[1]);


// object inside onject


const country = {
    name: "india",
    capi : "delhi",
    state :{
        raj :"jaipur",
        uk  : "dehadun",
        "up"  : "lucknow"
    }
}

console.log("country obj " , country.state);
console.log("country obj " , country.state.raj);



//insert value in object and take key name from a variable

let key = "email";
 
country[key] = "xyz.com"
//dot notation not works in this method; 
console.log (country);
 

