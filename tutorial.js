// 1.0 Intro
// -- What is JavaScript and how does it work?
// -- Install VSCode
// -- Install NodeJS

// 2.0 Node commands in terminal - (Ctrl + `) to open terminal
// -- Running a file --> node filename.js
// -- Killing a file --> ctrl + c



//-------------------------------------------------

// 3.0 Variables
// -- Hello world
// -- Console.log()
console.log("Hello World")

// -- Variables
//we can use two keywords to initialize a variable
//let and const
const mySentence = "Hello World"
let numberOfBooks= 4 //let declaration allows us t reassign a value,const does not

console.log(numberOfBooks+5,mySentence)
numberOfBooks = 6
// -- Code comments --> use comments to make it easier for others to read ur code 

// -- Assignment by reference
let newNumberOfBooks= numberOfBooks


//-----------------------------------------------------

// 4.0 Data Types (init / read / write)
// -- Strings
let myString="My name is Ojas"
let extendedString=myString+". And I am a CS student"
console.log(extendedString[4])


// -- Numbers
const favNumber = 2

// -- Arrays
const groceryList=[
    "eggs", "milk","wheat",83
]//creating a array
groceryList[2]= "bread"//we can rename
console.log(groceryList[favNumber])//we can access a particular element from the array 


// -- Objects --> like dictionary in python .Has a key value pair. we can write it like arrays but instead use {}
const user = {
    name:"Ojas",
    language:"English",
    rollno: 7
}
//different ways in which  we can read a dictionary
console.log(user)
console.log(user.name)
console.log(user["language"])

//updating a object
user.language="Hindi"
console.log(user["language"]) 

// -- Null
const nullDemo = null

// -- Undefined
const undefinedDemo = undefined

// -- Booleans (true/false)
const isOjasCool = true
let heIsUgly = false


//-------------------------------------------------------------------------
// 5.0 Recap
//use https://smoljames.com/notes/javascript

//-------------------------------------------------------------------------

// 6.0 Logic and Operators
// -- Operators (+ - / %)
const sum = 3+9
const division= 12/5
const remaider = 12%5
console.log(remaider)

// -- Logical operators (|| &&)
//&& --> when both the conditions should be satisfied
// ||--> when either of the conditions should be statisfied


// -- Type of --> used to confirm the type of datatype a particular variable is
console.log(typeof sum)

//---------------------------------------------------------------------------------

// 7.0 Conditional Statements
// -- If else
const x= 11
if(x>10 && x<20){
    console.log("number is less than 20 and greater than 10")
}
else{
    console.log("either greater than 20 or less than 10")
}

//-------------------------------------------------------------------------

// 8.0 Loops
// -- While loop
// let i = 0
// while(i<5){
//     console.log("The value of is: ",i)
//     i = i+1
// }

// -- For loop

const animals = ["dog","cat", "horse", "duck"]

for(let j =0;j<animals.length;j++){
    const current = animals[j]
    if(current== "dog"){
        continue
    }
    if(current== "horse"){
        break
    }
    
    let output= "index number "+ j + " value: "+ animals[j]
    console.log(output)
}

// -- Continue & break
//continue --> skip a particular condition
// break --> breaks the loop

//------------------------------------------------------------------

// 9.0 Functions
// -- Create a function
function printProduct(y,z){
    console.log(y*z)
}

// -- Invoke a function
printProduct(3,5)

// -- Return
function returnSum(y,z){
    const sum = y+z
    return sum
}
let sumOfyz = returnSum(3,5)
console.log(sumOfyz)

// -- Default inputs --> we give default inputs in case we have not provided any input while invoking a function
function printString(s1="Hello",s2="World"){
console.log(s1+s2) 
}
printString()

// -- Arrow functions
//modern syntax to write a function in JS
const arrowFunction = (arg)=>{
    console.log('Arg:',arg)
}
arrowFunction("hello")