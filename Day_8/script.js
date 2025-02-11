function demo(data)
{
   
    if(data.role=='admin')
    {
     
        if(data.email=="abc@gmail.com" && data.password=="abc123")
        {
            console.log("Login Successfull!")
        }
        else if(data.email!="abc@gmail.com" && data.password!="abc123")
        {
            console.log("Try again!")
        }
        else if(data.email!="abc@gmail.com")
        {
            console.log("Incorrect Email")
        }
        else
        {
            console.log("Incorrect Password")
        }
      
    }
    else{
        console.log("Else Exec")
    }
    
    // return data
}

const data = {
    role:"admin",
    name:"abc",
    email:"abc@gmail.com",
    password :"abc123"
}
// console.log(demo(data))
demo(data)



