# GeckoJS

<p align="center">
  <img src="./assets/mage.jpg"/>
</p>

### An interpreted, object-oriented and statically typed programming language inspired by TypeScript, Java and Scala written in JavaScript.

### How to setup

GeckoJS is implemented in [ES6](https://en.wikipedia.org/wiki/ECMAScript#ES6) and the interpreter requires [Node.js](https://nodejs.org/en/) >= 4.2.2 to run.

With Node.js installed, type the following commands in a prompt to setup GeckoJS.

1. ```$ git clone https://github.com/okkindel/GeckoJS.git```
2. ```$ cd geckoJS```
3. ```$ npm install```

### How to build

Run ```npm run build``` to build.

### How to run

Run ```npm run gecko``` to start an shell for writing GeckoJS programs.

<p align="center">
  <img src="./assets/book.jpg"/>
</p>


### Data types:

Gecko supports values of types like `Int`, `Double`, `String`, `Bool` and `Void`. All types in Gecko inherit from a supertype `Object`.

### Comments: 

Anything from the `//` to the end of line will be ignored by the interpreter.


```
// This is a comment.
```

### Conditions:

Conditions are expressed using an if-else expression.

```
if (<condition>) {
    (do something)
} else {
    (do something)
}
```

### Functions:
Functions are defined using the `funcion` keyword. Parameters are separated by `,` and enclosed in parenthesis `(a: Int, b: Int)`. A parameter is followed whith `:` by its type function languages way.

```
funcion sum(a: Int, b: Int): Int = {
    a + b
}
```
