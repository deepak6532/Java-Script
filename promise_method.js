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


console.log("Promise API Example");

let p1 = new Promise((resolve ,reject)=>{
    let name ="Deepak";
    setTimeout(()=>{
        console.log("p1 SetTimeout is executed");
        resolve("Your name is " + name);
    },2000);
});



let p2  = new Promise((resolve , reject)=>{
    let age = 17;

    if(age <18)
    {
        reject("You are not eligible");
    }
    else{

    
    setTimeout( ()=>{
        console.log("p2 SetTimeout is executed");
        resolve("your age is :" + age);
    },1000);
}
});


let p3 = Promise.all([p1,p2])

p3.then((result) =>{
    console.log(result);
}).catch((error)=>{
    console.log("Error occurred: " + error);
});

console.log("------------------------------------------------------------");

let p4 = Promise.allSettled([p1,p2])

p4.then((result) =>{
    console.log(result);
}).catch((error)=>{
    console.log("Error occurred: " + error);
});

"your can use all methd same as promise.all() and promise .allSettled() "