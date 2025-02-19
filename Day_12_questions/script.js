
let sentence = "hello how are you"
// Not count space only count characters
let ch = 0;

for(let a =0;a<sentence.length;a++)
{
    if(sentence[a] !==" ")
    {
          ch++;
        
    }
   
}
console.log("Total character in sentence is :",ch)



// Count total vowels  and constonent in this sentence 


// let sentence  = "hello how are you";

console.log(sentence.length)

let vowel = "aeiouAEIOU";
let vowel_count = 0;
let cons_count = 0
let s = 0
for(let a =0;a<sentence.length;a++)
{
  
    if(vowel.includes(sentence[a]))
    {
        vowel_count++
    }
    else if(sentence[a] !==" ")
    {
        
         cons_count++
        
    }
    // else
    // {
    //     s++
    // }
   
   
}
console.log("Total vowel in  sentence is :",vowel_count)

console.log("Total consonent in  sentence is :",cons_count)

// console.log("Total space :",s)
