function abc() {
    console.log(arguments[0]);
}
abc(4, 5);



function ab() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
ab(4, 5);



function abc() {
    console.log(arguments[0])
}
abc(1, 2, 3, 4, 5)


function abc(...arg) {
    console.log(arg[2])
}
abc(1, 2, 3, 4, 5)


//lambda function 

const abc = (...rest) => console.log(rest);

abc(1, 2, 3, 4, 5, 6)




// this keyword

console.log(this)   //{}


name = "Ankit"
console.log(this.name)  //undefined 



let abc =
{
    mname: "Deepak",
    age: 20,
    inc: function () {
        console.log(this.mname);
        console.log(this.age);
    }
};
abc.inc()    // deepak 20 



let abc =
{

    inc: function () {
        mname: "Deepak"
        age: 20
        console.log(this.mname);
        console.log(this.age);
    },
};
abc.inc()  //undefined undefined   


function abc() {
    let mname = "deep";
    console.log(this.mname)
}
abc()    //deep


// Arrow function case is undefined
const abc = () => {
    let mname = "depka";
    console.log(this.mname)
}
abc()    //undefined