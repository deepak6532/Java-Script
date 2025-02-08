function today(email,password,role)
{
    if(role==="admin")
    {
        if(email==="abc@gmail.com"  && password==="abc123")
        {
            console.log("login successfully")
            
        }
        else if(email!=="abc@gmail.com"  && password==="abc123")
        {
            console.log("Email Incorrect")
        }
        else if(email==="abc@gmail.com"  && password!=="abc123")
        {
            console.log("incorrect password")
        }
        else
        {
            console.log("Invalid email password")
        }
    }
    else
    {
        console.log("role does not match")
    }
}

today("abc@gmail.com","abc123","admin")


// Using Arrow functions
let today = (email,password,role) =>
    {
        if(role==="admin")
        {
            if(email==="abc@gmail.com"  && password==="abc123")
            {
                console.log("login successfully")
                
            }
            else if(email!=="abc@gmail.com"  && password==="abc123")
            {
                console.log("Email Incorrect")
            }
            else if(email==="abc@gmail.com"  && password!=="abc123")
            {
                console.log("incorrect password")
            }
            else
            {
                console.log("Invalid email password")
            }
        }
        else
        {
            console.log("role does not match")
        }
    }
    
    today("abc@gmail.com","abc123","admin")




// Using ternary operator
let email = "abc@gmaill.com"
let password = "abc123f"
let role= "admin"

let result= 
role==="admin" ?
    email==="abc@gmail.com"  && password==="abc123" ?
            
            console.log("login successfully"):
        
                
            email!=="abc@gmail.com" ?
            
                console.log("Email Incorrect"):
            
            password!=="abc123" ?
            
                console.log("incorrect password"):
        
        
        console.log("Invalid email password"):
        
        
    console.log("role does not match")
    
    

    // Object data in conditional statements