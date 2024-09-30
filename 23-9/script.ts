console.log("Hello")

// static types
let FirstName : string = "Mohammad"
let LastName : string = "Aljamal"
let Age : number = 24

// speacial types
let test : any = true // disables type checking
let test2 : unknown = false
// let test3 : never = true // Error: Type 'boolean' is not assignable to type 'never'.
let x : undefined = undefined
let y : null = null

// Arrays
const arr : string[] = ["mohammad","Ahmad","radwan"]
const arr2 : readonly string[] = ["mohammad","Ahmad","radwan"] // keyword can prevent arrays from being changed.

// Tuple
// A tuple is a typed array with a pre-defined length and types for each index.
let tup:[number,boolean,number,string]
tup = [1,true,24,"mohammad"]

// Typed Object
const car : {type : string , model : number , color : string} = {
    type : "KAI",
    model : 2004,
    color : "red"
}

// Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// enums will initialize the first value to 0 and add 1 to each additional value
// You can set the value of the first numeric enum and have it auto increment from that

enum CardinalDirections {
    North,
    East,
    South,
    West
}

let currentDirection = CardinalDirections.North;
// currentDirection = 'North'; // Error

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  console.log(StatusCodes.NotFound); // 404
  console.log(StatusCodes.Success); // 200

  enum CardinalDirections {
    Northh = 1,
    Eastt,
    Southh,
    Westt
  }
  console.log(CardinalDirections.Northh); // 1
  console.log(CardinalDirections.Westt); // 4
  