To run TypeScript code, we'll need to compile it into JavaScript first, as browsers and Node.js runtime environments don't understand TypeScript directly. Here are the steps to compile and run TypeScript code:

### 1. Install TypeScript Compiler (if not already installed)

- Install TypeScript globally on our system using npm (Node Package Manager):

```bash
npm install -g typescript
```

- This command installs the TypeScript compiler globally, allowing us to use the `tsc` command from anywhere in our terminal.

### 2. Write TypeScript Code

- Write our TypeScript code in a `.ts` file using any text editor or IDE of our choice.
- For example, create a file named `app.ts` and write some TypeScript code:

```typescript
// app.ts
let message: string = "Hello, TypeScript!";
console.log(message);
```

### 3. Compile TypeScript Code

- Navigate to the directory containing our TypeScript file in our terminal and run the following command:

```bash
tsc app.ts
```

- This command invokes the TypeScript compiler (`tsc`) and compiles the `app.ts` file into JavaScript. 
- If there are no errors in our TypeScript code, we'll see no output. 
- If there are errors, the compiler will display them in the terminal.

### 4. Run JavaScript Code

- After compiling TypeScript code into JavaScript, we'll get a corresponding `.js` file. We can run this JavaScript file using Node.js or include it in an HTML file for browser execution.

```bash
node app.js
```
- This command executes the generated JavaScript file (`app.js`) using the Node.js runtime environment, and we'll see the output in the terminal.

### Additional Notes

- To watch for changes and automatically compile TypeScript files as we make edits, we can use the `--watch` flag with `tsc`:

```bash
tsc app.ts --watch
```

### Generalization

- If we have a `tsconfig.json` file in our project directory with TypeScript compiler options, we can simply run `tsc` without specifying the file name to compile all TypeScript files in the directory.