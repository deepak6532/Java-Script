//16: Convert Kilometers to Miles: Write a lambda function to convert distance from kilometers to miles.


const a = function(k)
{
    return k*0.621371
}

console.log(a(2));

//17: Check Uppercase or Lowercase: Write a lambda function to check if a character is uppercase or lowercase.


const b = function(char)
{
    return char >"A" & char < "Z" ? "Uppercase" : 
            char>"a" & char <"z" ? "Lowercase" :
            "NotLetter";
}

console.log(b("D"))  //Uppercase


//18:  Find the Last Digit of a Number: Write a lambda function to extract the last digit of a given number.



const c = function(number)
{
    return number%10 
    
}
console.log(c(342))  //2


//19: Check if Number is Positive, Negative, or Zero: Write a lambda function to check if a number is positive, negative, or zero.


const d = function(num)
{
    return num > 0 ? "Positive":
            num < 0 ? "Negative":
            "Zero"
}

console.log(d(12))   // Positive
console.log(d(-5))  // Negative
console.log(d(0))   // Zero

//20: Calculate Area of a Circle: Write a lambda function to calculate the area of a circle given the radius.

const e = function(r)
{
    return 3.14 * r *r
}

console.log(e(4))       // 50.24

//21: Multiply Two Numbers: Write a lambda function to multiply two numbers.


const f =function(n1,n2)
{
    return n1*n2;
    
}
console.log(f(6,4))  //24


//22: Subtract Two Numbers: Write a lambda function to subtract two numbers.


const g =function(n1,n2)
{
    return n1 - n2;
    
}
console.log(g(6,4))    //2

//  23 prime number 

//24: Find the Cube of a Number: Write a lambda function to find the cube of a given number.


const h = function(number)
{
    return number ** 3
}

console.log(h(5))  //125


//25: Convert Celsius to Fahrenheit: Write a lambda function to convert temperature from Celsius to Fahrenheit.



const i = function(celsius)
{
    return (celsius * 9/5) + 32;
}

console.log(i(5))  //41


//26: Find the Perimeter of a Rectangle: Write a lambda function to calculate the perimeter of a rectangle given length and breadth.



const j  = function(l,w)
{
    return l * w
}

console.log(j(5 ,8)) //40

//27: Find the Perimeter of a Circle: Write a lambda function to calculate the perimeter of a circle given the radius.




const k  = function(r)
{
    return (2 * 3.14 * r).toFixed(2)
}

console.log(k(5))   //31.40


// 28
//29: Find the Greater of Three Numbers: Write a lambda function to find the greatest of three numbers.


const   l  =function ( a,b,c)
{
    return (a>b && a>c) ? a :
            (b>c && b>a) ? b :
            c;
}

console.log(l(2,6,4)) //6


//30: Find the Smallest of Three Numbers: Write a lambda function to find the smallest of three numbers.



const   m  =function ( a,b,c)
{
    return (a < b && a < c) ? a :
            (b <c && b < a) ? b :
            c;
}

console.log(m(2,6,4)) //2


