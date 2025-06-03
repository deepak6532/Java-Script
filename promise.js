/*The  soluction to the callback hell is promises a promise is a "promise  of code execution "
The Code either executes or fails in both the cases structure will be notified.

The Syntax of a primise look like ths:

let promise =  new promise(function(resolve ,reject)){
    //executes
}


*/



console.log("This is a promise")

let prom  = new Promise ( (resolve,reject) =>
{
    let name="deepak"
    setTimeout(function(){
        console.log("This is a timeout function ");
        resolve("my name is " + name);
    },3000);
});

prom.then(function(result){
    console.log(result);
})



console.log("======================================================")

console.log("This example of reject ")

let prom2  = new Promise((resolve,reject)=>{
    let age = 20;

    let randomNumber = Math.random();

    if(randomNumber <0.5)
    {
        reject("No Random number was not supporting ");
    }
    else{
        setTimeout(function(){
            console.log("This is prom2 timeout function ");
                resolve("My age is " + age);
            
        },2000);
    }
});

prom2.then(function(result2){
    console.log(result2);
}).catch(function(error){
    console.log(error);
})



/*
Promise API
There are 6 static methods of promise class:
1. Promise.all() :>  wait for all resolve
2. Promise.allSettled(primses)
3. Promise.any(promises)
4. Promise.race(promises)
5. Promise.resolve(value)   
6. Promise.reject(error)

*/ 