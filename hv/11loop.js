// loop is use for repetation of task for a certain number till codition fullfill or for infinite

/*basically 3 types of loop are used 

for - initilization condition updation
while 
do while


to print 1 to 5 , uing above 3 loops 
*/
let start = 1;
let limit = 5;


// using for 
for (let i = start ; i <= limit; i++){
    console.log(i);
    
}

// using while 

// while(start <= limit ){
//     console.log(start);
//     start++;
// }


//using do while - it will gives output minimum once, wheter condition is false 

do{
    console.log(start);
    start++;    
}
while(start<=limit)