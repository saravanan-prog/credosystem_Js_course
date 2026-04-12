# Arrow functions

- Arrow functions are a shorter, modern way to write functions 
- in JavaScript (introduced in ES6). They’re especially useful for writing clean and concise code.

#### Basic Syntax
```
  const functionName = (parameters) => {
    // code
  };
```

### 🔹 Simple Examples

#### Normal function vs Arrow function

```
# Regular function:


function add(a, b) {
  return a + b;
}


# Arrow function:


const add = (a, b) => a + b;

```

#### Single Parameter (no parentheses needed)

```
const square = x => x * x;
```

#### No Parameters

```
const greet = () => "Hello!";
```

#### Multiple lines (use {} and return)

```
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
```

#### Key Features

 1. Shorter syntax - Less boilerplate, cleaner code.
 2. Implicit return - If there's only one expression, no need for return:

```
  const double = x => x * 2;
```