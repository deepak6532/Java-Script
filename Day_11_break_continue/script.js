// Break

let number = [1,2,3,4,5,6]

for(let i=0;i<number.length;i++)
{
    // console.log(numbe[i])
    if(number[i] === 3)
    {
        break;
       
    }
    console.log(number[i])
}


// Continue
let number2 = [1,2,3,4,5,6]

for(let i=0;i<number2.length;i++)
{
    // console.log(numbe[i])
    if(number2[i] === 3)
    {
        continue;
       
    }
    console.log(number2[i])
}




// print reverse order 
let gender  = ["male","female","malea","maleb"]

for(let i=gender.length-1;i>=0;i--)
{
   console.log(gender[i])
}



let sentence = "hello how are you"

let wordcount = 0;

let word = sentence.split(" ")

let ch = 0;

for(let i =0;i<word.length;i++)
{
    wordcount++;
}

console.log("wordcount",wordcount)


for(let a =0;a<=sentence.length;a++)
{
    ch++;
}
console.log(ch)