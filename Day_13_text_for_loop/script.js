// Question 1:
// Write a JavaScript program that takes an integer input from the user and checks if it is a prime number using a for loop. If it’s a prime, print "Prime"; otherwise, print "Not Prime".4


Ans:


function demo(n)
{
    
    let i = 1;
    let c = 0;
    while(i<=n)
    {
    if(n%i==0)
        c+=1
    i+=1
    }

if(c==2)
    console.log("Prime number")
else
    console.log("Not prime")
}

demo(11)


// Question 2:
// Write a JavaScript program that takes an array of numbers and prints out all the even numbers using a for loop and the modulo operator %.


let arr = [10,11,12,13,14,15,16,17,18,19,10]

for(let i=0;i<=arr.length;i++)
{
    if(i%2==0)
    {
        console.log(arr[i],"")
    }
}


// Question 3:
// Write a JavaScript program that calculates the factorial of a number using a for loop. The number should be provided by the user.


function demo(n)
{
    let fact = 1
    for(let i=1;i<=n;i++)
    {
        fact  = fact*i
    }
    console.log("Factorial is :",fact)
}

demo(5)


// Question 4:
// Write a program that checks whether a number entered by the user is divisible by both 3 and 5 using the modulo operator and an if condition. If true, print "Divisible by both"; otherwise, print "Not divisible by both".



function demo(n)
{
    if(n%3===0 && n%5===0)
    {
        console.log("Divisible by both")
        
    }
    else
    {
        console.log("Not divisible by both")
    }
}

demo(15)


// Question 5:
// Write a JavaScript program to count how many times the number 7 appears in a given array of integers. Use a for loop and the == operator to compare each element.


function  demo(arr)
{
    let count = 0
    for(let i=0;i<=arr.length;i++)
    {
        if(arr[i]==7)
        {
            count+=1
        }
    }
    console.log("Total 7 is :",count)
}

let arr = [1,4,7,2,7,3,7,2,7,"7"]
demo(arr)



// Question 6:
// Write a program that asks the user to input a number and prints all numbers from 1 to that number, except those that are divisible by 4 or 6, using a for loop and the modulo operator.


function demo(n)
{
    for(let i=1;i<=n;i++)
    {
        if(i%4===0 && i%6===0)
        {
            console.log(i,)
        }
    }
}

demo(30)


// Question 7:
// Create a JavaScript program that takes a number n and prints the first n Fibonacci numbers using a for loop. Make sure to check that n is a positive integer.


   
function demo(n)
{
    let a = 0;
    let b =1
    // let c = 0
    
    console.log(a)
    console.log(b)
    
    for(let i=0;i<=n;i++)
    {
        let d = a+b
        console.log(d)
        
        a = b 
        b = d
    }
}
demo(6)

// Question 8:
// Write a program that calculates the sum of all the odd numbers between 1 and 100 (inclusive) using a for loop and the modulo operator %.


let sum = 0
for(let i=1;i<=100;i++)
{
  
    if(i%2!=0)
    {
        sum  = sum +i
    }
    
}
console.log("Total sum of Odd number 1 to 100 :",sum)


// Question 9:
// Write a program to check if a given string is a palindrome. Use a for loop to iterate over the string and compare characters at corresponding positions (first and last, second and second last, etc.) using conditions.


let s  ="aba"
let n = ""

for(let i=s.length-1;i>=0;i--)
{
    n = n + s[i]
}
console.log(n)

if(n == s)
{
    console.log("Palindrome")
}
else
{
    console.log("Not Palindrome")
}



