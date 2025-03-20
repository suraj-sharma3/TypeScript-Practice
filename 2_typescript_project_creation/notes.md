1. Create Project Folder: mkdir my-ts-project && cd my-ts-project
2. Initialize Node.js Project: npm init -y (creates package.json)
3. Install TypeScript in the created node project: npm install typescript --save-dev
4. Generate TypeScript Config: npx tsc --init (creates tsconfig.json)
5. Create Source Folder & File: mkdir src && touch src\index.ts
6. Write TypeScript Code in src\index.ts:
    let message: string = "Hello, TypeScript!";
    console.log(message);
7. Move into project folder and Compile TypeScript: npx tsc (outputs JS in src/), we can even move into the folder where the typescript code exists and then run the command "tsc" in the folder, the typescript code will get compiled into javascript. If you have multiple typescript files in a folder and you run the "tsc" command in that folder, all its typescript files will get compiled to javascript files at once
8. Run Compiled JavaScript: node src\index.js
9. Enable Auto-Compile (Optional): npx tsc --watch 
10. We can automate the compilation and execution of typescript code by creating a script in package.json file. We can add a key value pair in the scripts dictionary where the key will be the name of the run and value which is a string will be the commands that the script should execute.

for e.g. "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev" : "tsc && node test.js"
  }

In the above given example, test script is there by default. "dev" is the name of the script that we have added and "tsc" and "node test.js" are commands that should be executed when the dev script is executed with the command "npm run dev". Now we can create a typescript file named test.ts, put some code in it and go into the folder where this file is and then execute the "npm run dev" command to run the dev script which will compile the ts file into a js file and then execute the js file.

11. We can also create a typescript project with vite which is a frontend build tool
