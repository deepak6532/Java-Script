let prom = new Promise((resolve ,reject)=>
{
    setTimeout(()=>{
        console.log("SetTime out was executed");
        resolve(alert("You Ok result!"));
    },3400);
});

prom.then(r => {
    console.log("answer was alert");

   
}).catch(e =>{
    console.log("Error",e);
})