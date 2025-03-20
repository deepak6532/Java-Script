// 1: Sum of Two Numbers: Write a lambda function to add two numbers.


const a = function(a,b)
{
    return a+b;
}

console.log(a(2,6))  //8



//2:  Square of a Number: Write a lambda function to find the square of a given number.


const b = function(n)
{
    return n*n
}

console.log(b(6))     // 36


//3: Check Even or Odd: Write a lambda function to check if a number is even or odd.




const d  = function(n)
{
    return n%2==0 ? "Even":"Odd"
}

console.log(d(19))  //Odd


//4: Find Maximum of Two Numbers: Write a lambda function to find the maximum of two numbers.




const c  = function(a,b)
{
    return a>b?a:b
}

console.log(c(18,9))   //18


//5: Find Minimum of Two Numbers: Write a lambda function to find the minimum of two numbers.


const e  = function(a,b)
{
    return a<b?a:b
}

console.log(e(18,9))  // 9

//6: Power Calculation: Write a lambda function to calculate the power of a number (base, exponent)


const f =  function(base ,exponent)
{
    return base**exponent
}

console.log(f(5,2)) //25




//7:Convert Fahrenheit to Celsius: Write a lambda function to convert temperature from Fahrenheit to Celsius.

const g = function(fahrenheit )
{
      return ((fahrenheit - 32) * 5 / 9).toFixed(2);
}
console.log(g(100))  //37.78




//8:Check Leap Year: Write a lambda function to check if a year is a leap year or not.


const h = function(year)
{
    return year%400 == 0 || (year%4==0 & year%100!=0) ? "Leap":"Not leap"
}
console.log(h(2025))  //Not leap


// 9:Find Factorial Using Recursion: Write a recursive lambda function to find the factorial of a number.

const i = function(n)
{
    
    return (n==0) || (n==1) ? 1 : n * i(n-1);
}
console.log(i(6))


// // 10: Reverse a String: Write a lambda function to reverse a given string.

const j = function(s)
{
    return s.split("").reverse().join("");
}

console.log(j("hello world"))    // dlrow olleh


let  x  = "deepak"
console.log(x.split("")) 
// [ 'd', 'e', 'e', 'p', 'a', 'k' ]


//11: Check Palindrome String: Write a lambda function to check if a given string is a palindrome.


const k = function(s)
{
    let s2 = s.split("").reverse("").join("");
    
    return s2===s;
}
console.log(k("naman"))  //true


//12: Find the Absolute Value: Write a lambda function to return the absolute value of a given number.

const l = function(value)
{
    return Math.abs(value)
}
console.log(l(-10))  // 10
console.log(l(5.9))   // 5.9

//13:Check Divisibility by 5: Write a lambda function to check if a number is divisible by 5.

const m = function(value)
{
    return value%5===0
}
console.log(m(15))   // true


//14: Find the Length of a String: Write a lambda function to find the length of a given string.


const n = function(s)
{
    return s.length;
    
}
console.log(n("Deepak gupta"))


//15: Calculate Simple Interest: Write a lambda function to calculate simple interest (P, R, T).

const o = function(p,r,t)
{
    return (p* r * t)/100
}

console.log(o(10000,2,2)) //400


// 16



