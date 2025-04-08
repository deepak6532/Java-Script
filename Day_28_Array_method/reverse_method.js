// 7. reverse() - Array ko ulta karna 

// Yeh array ke order ko ulta kar deta hai. 



let numbers = [1, 2, 3, 4]; 
 

numbers.reverse();  

console.log(numbers);   
// Output: [4, 3, 2, 1] 



// Palindrome Check karna ho 

// Agar kisi word ya sentence ka reverse check karke palindrome verify karna ho: 

function isPalindrome(str) { 

    let reversed = str.split("").reverse().join(""); 

    return str === reversed; 

} 

console.log(isPalindrome("madam")); // Output: true 

console.log(isPalindrome("hello")); // Output: false 