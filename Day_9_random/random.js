// import mathjs;

let n = Math.random() * 10000;

console.log(n);


let x = Math.floor((Math.random() * 10000) );

console.log(x);


let a = Math.floor(32.50)
console.log(a)


let b =  Math.ceil(32.50);
console.log(b)


let c = Math.ceil((Math.random() * 10000))

console.log(c)


// round() method


function demo()
{
    

let x = Math.round((Math.random() * 100) );

if(x>=50)
{
    console.log("hello",x)
}
else
{
    console.log("hii",x)
}

}
demo()

demo()



// Generate n number size otp

function demo(n)
{
    let otp=""
    for(let i=0;i<n;i++)
    {
        otp =  otp + Math.floor((Math.random() *10) );
        
        
    }
    console.log(otp)
}
demo(8)







