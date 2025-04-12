// Callback function ek function hota hai jo kisi doosre function ko argument ke roop mein diya jata hai, aur wo function baad mein call (execute) hota hai. 

function greet(name, callback) { 

  console.log("Hi " + name); 

  callback(); 

} 
function sayBye() { 

  console.log("Bye!"); 

} 

greet("ankiit", sayBye); 




function sum(a,b)
{
    return a +b;
}
function sub(a,b)
{
    return a -b;
}
function mul(a,b)
{
    return a*b;
}
function div(a,b)
{
    return a/b;
}

function Calculate(a,b,add)
{
    return add(a,b)
}
let ans = Calculate(4,4,sum)
console.log(ans)



// CLASS ASSIGNMENT 

function square(s)
{
    return s*s;
}
function triangle(a,b)
{
    return 0.5*a*b;
}
function rectangle(a,b)
{
    return a*b;
}


function Result(a,calc)
{
    return calc(a)
}

let ans = Result(5,square)
console.log("ares of square is:",ans)



function Result2(l,b,rect)
{
    return rect(l,b)
}
let ans2  = Result2(5,6,triangle)
console.log("area of triangle is:",ans2)


