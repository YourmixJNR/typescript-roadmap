// Explicit Type
let firstName: string = "John";

// Implicit Type
let secondName = "Deo"

// TypeScript Arrays
const names: string[] = [];
names.push("John Deo");

// TypeScript Tuple
let demoTuple: [number, string, boolean]
demoTuple = [10, "Demo Tuple", true]

// TypeScript Object Types
const person: { name: string, age: number, address: string } = {
    name: "Idan",
    age: 13,
    address: "Akure"
}

// TypeScript Enums
enum HttpStatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404
}
const handleResponse = (code: HttpStatusCode) => {
    switch (code) {
        case HttpStatusCode.OK:
            console.log("Request succeeded.");
            break;
        case HttpStatusCode.BadRequest:
            console.log("Bad request.");
            break;
        default:
            console.log("Unknown status code.");
    }
}

handleResponse(HttpStatusCode.OK);

// TypeScript Type Aliases and Interfaces
type JoshuaName = string
type JoshuaAge = number
type JoshuaAddress = string
const joshuaName: JoshuaName = "Fakson Joshua"
const joshuaAge: JoshuaAge = 12
const joshuaAddress: JoshuaAddress = "FUTA Akure"

interface Learn {
    javaScript: string,
    days: number
}
const learnJavaScript: Learn = {
    javaScript: "Everyday",
    days: 7
}

// TypeScript Union Types
const printStatusCode = (code: string | number) => {
    console.log(`My status code is ${code}`)
}
printStatusCode(404)
printStatusCode('404')

// TypeScript Functions
const getTime = (): number => {
    return new Date().getTime();
}
console.log(getTime());

type Negate = (value: number) => number
const negateFunction: Negate = (value) => value * -2

const helloWord = (): void => {
    console.log('Hello World')
}

// TypeScript Casting
let x: unknown = 'Hello World'
let castAsKey = x as string
let castAsString = <string>x
console.log(castAsString.length)

// TypeScript Basic Generics
const createPair = <S, T>(v1: S, v2: T): [S, T] => {
    return [v1, v2]
}
console.log(createPair<string, number>('Hello World', 50)) // ['Hello World', 50]

const createLoggedPair = <S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] => {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
}

// TypeScript Utility Types
// Partial
interface Point {
    x: number,
    y: number,
}

let partPoint: Partial<Point> = {}
partPoint.x = 10