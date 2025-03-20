// install typescript with npm by running this command : npm install -g typescript
// to check typescript installation : type tsc in cmd and press enter, if you get an output, typescript has been installed properly

/* 
1. Install Node.js (Check with node -v, download from nodejs.org if not installed).
2. Install TypeScript: npm install -g typescript
3. Check TypeScript Version: tsc --version
4. Create a TypeScript File: touch script.ts (or use a text editor).
5. Write Code in script.ts:
    let message: string = "Hello, TypeScript!";
    console.log(message);
6. Compile TypeScript to JavaScript: tsc script.ts → Creates script.js.
7. Run the Compiled JavaScript: node script.js
8. Enable Auto-Compilation (Optional): tsc --watch */

let age: number = 25;
let userName: string = "Alice";

console.log(`Name: ${userName}, Age: ${age}`);

// Function with type annotations
function multiply(x: number, y: number): number {
    return x * y;
}

console.log(multiply(4, 5)); // ✅ Works
console.log(multiply(4, "5")); // ❌ Error: Argument of type 'string' is not assignable to type 'number'
