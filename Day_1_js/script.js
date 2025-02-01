function text()
{
    let i= 20;
    for (i=20;i<=30;i++)
    {
        if(i==30)
        {
            console.log("Done");
        }
        else if (i%2==0)
        {
            console.log(i,"Even");

        }
        else
        {
            console.log(i,"Odd");
        }
    }
}

text();


// Using Recursive function 
function text(i)
{
   
        if(i===30)
        {
            console.log("Done");
            return 0;
        }
        else if (i%2==0)
        {
            console.log(i,"Even");

        }
        else
        {
            console.log(i,"Odd");
        }
    
    text(i+1);
}

text(20);


//  Scope:
// There are four type of scope in js.
//  1.Global Scope (outside functions)
//  2. Function Scope (inside function)
//  3. Block Scope (inside {} or )
//  4. Lexical Scope (based on where the function is defined)


// Global Scope Example

let a=20;

function check()
{
    console.log("Value of a is:",a);
}

console.log("The value of a is (outside)",a);
check()


// Local scope example



function locl()
{
    let a=20;
    console.log("Value of a is:",a);
    
}

// console.log("The value of a is (outside)",a);
locl()




// Block Scope  Example


{
    let a=20;
    console.log("Value of a is:",a);
    
}
// console.log("The value of a is (outside)",a);
if(true)
{
     let b=20;
    console.log("Value of b is:",b);
    
}
//  console.log("Value of b is:",b);



// Hexcial scope

function outer()
{
    function inner()
    {
        console.log("Inner function  called")
    }
    console.log("Outer function called")
    return inner()
}
outer()


// Var => Reassign ,Re declare 

// Let  => Only,Re-assign ,Block scope

// Const => no-,Re-assign ,re declare,block scope

// Examples 

// let a=5;

// function demo()
// {
//     console.log("inside function",a);
// }

// demo()
// console.log(a)

// var b = 6;

// var b= 10
// console.log(b)

// let x = 20
// console.log(x)

// // let x = 25   // x is already declare
// console.log(x)





// let a=5;

// function demo()
// {
//     console.log("inside function",a);
// }

// demo()
// console.log(a)

// var b = 6;

// console.log(b)
// a =20

// console.log(20)
// b = 30

// console.log(b)

// const x = 50;
// console.log(x)
// // x =55  not re assign
// console.log(x)


let s = "123ab"

// let i = parseInt(s);

// console.log(i);

let n  = Number(s);
console.log(typeof n)


// Assignment operator Example

// let x = 5;


//  x+=5;
// console.log(x);

// x-=5;
// console.log(x);

// x*=5;
// console.log(x);

// x%=5;
// console.log(x);




// === is use to check value and datatype of value 

// Example:-

// let a = 10;
// let b = "10";

// console.log(a==b);
// console.log(a===b);

