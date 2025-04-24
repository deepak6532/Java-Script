// Arrow function

let fun = (a,b=8)=>
    {
        let x = a+b
        
        console.log("This is a arrow function ")
        
        console.log("sum of a and b is :",x)
    
        
    }
    
fun(2)


// IIFE function  Example
( function (a,b){
    
    
    // let a =10 
    console.log(a,b)
}


)(4,"deepak")


// Recursive function Example
function  recu(n)
{
    if(n===530)
    {
        console.log("Done");
        return
    }
   
   if(n%2==0)
   {
     console.log(n,"even number");

   }
    recu(n+1);
    
}

recu(500);

