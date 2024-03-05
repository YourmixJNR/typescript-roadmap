// Explicit Type
var firstName = "John";
// Implicit Type
var secondName = "Deo";
// TypeScript Arrays
var names = [];
names.push("John Deo");
// TypeScript Tuple
var demoTuple;
demoTuple = [10, "Demo Tuple", true];
// TypeScript Object Types
var person = {
    name: "Idan",
    age: 13,
    address: "Akure"
};
// TypeScript Enums
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
    HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
    HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
})(HttpStatusCode || (HttpStatusCode = {}));
var handleResponse = function (code) {
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
};
handleResponse(HttpStatusCode.OK);
var joshuaName = "Fakson Joshua";
var joshuaAge = 12;
var joshuaAddress = "FUTA Akure";
var learnJavaScript = {
    javaScript: "Everyday",
    days: 7
};
// TypeScript Union Types
var printStatusCode = function (code) {
    console.log("My status code is ".concat(code));
};
printStatusCode(404);
printStatusCode('404');
// TypeScript Functions
var getTime = function () {
    return new Date().getTime();
};
console.log(getTime());
var negateFunction = function (value) { return value * -2; };
var helloWord = function () {
    console.log('Hello World');
};
// TypeScript Casting
var x = 'Hello World';
var castAsKey = x;
var castAsString = x;
console.log(castAsString.length);
// TypeScript Basic Generics
var createPair = function (v1, v2) {
    return [v1, v2];
};
console.log(createPair('Hello World', 50)); // ['Hello World', 50]
var createLoggedPair = function (v1, v2) {
    console.log("creating pair: v1='".concat(v1, "', v2='").concat(v2, "'"));
    return [v1, v2];
};
var partPoint = {};
partPoint.x = 10;
