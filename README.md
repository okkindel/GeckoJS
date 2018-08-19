# GeckoJS

<p align="center">
  <img src="./assets/mage.jpg"/>
</p>

### An interpreted, object-oriented and statically typed programming language inspired by TypeScript, Java and Scala written in JavaScript.

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
    <do something>
} else {
    <do something>
}
```

### Functions:
Functions are defined using the funcion keyword. Parameters are separated by `,` and enclosed in parenthesis `(a: Int, b: Int)`. A parameter is followed whith `:` by its type function languages way.

```
func sum(a: Int, b: Int): Int = {
    a + b
}
```
