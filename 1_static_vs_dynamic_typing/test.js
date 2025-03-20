var age = 25;
var userName = "Alice";
console.log("Name: ".concat(userName, ", Age: ").concat(age));
// Function with type annotations
function multiply(x, y) {
    return x * y;
}
console.log(multiply(4, 5)); // ✅ Works
// console.log(multiply(4, "5")); // ❌ Error: Argument of type 'string' is not assignable to type 'number'
