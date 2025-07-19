let arr  = [10,20,30,40,-50,35,45]

let first  = 0
let second = 0
let third = 0


for(num of arr)
{
    if(num > first)
    {
        third  = second
        second = first 
        first = num
    }
    else if(num > second && num < first)
    {
        third =  second 
        second = num
    }
    else if(num >  third  && num < second)
    {
        third = num
    }
    
}


console.log("first" ,first)
console.log("second",second)
console.log("third",third)







