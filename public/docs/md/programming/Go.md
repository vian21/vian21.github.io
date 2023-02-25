# Go - Golang

## Data types

- int
- string
- bool
- float32 | float64

## variables

```go
var x int;
var x int =10;

//either have type declartion or value or both
var x=10

//or use :=. the type is inferred from the value
x:=10
y:="hello"

```

- in go you can either have a semicolon `;` at end or omit it. Go will automatically add it for you at compile time.

## formatting verbs

- %v - print value
- %T - print type

```go
package main

import ("fmt")

func main() {
var i string = "Hello"
var j int = 15

fmt.Printf("i has value: %v and type: %T\n", i, i)
fmt.Printf("j has value: %v and type: %T", j, j)
}
```

## arrays

- immutable
- length has to be specified or inferred at declaration
- `var name = [length]type{values}`
- `name := [length]type{values}`
- use len(`array`) - get length

```go
var a=[3]int{1,2,3};
a := [3]int{1,2,3};
a := [...]int{1,2,3};

```

## slices

- go suports slices. which are like arrays but can grow and shrink
- u just have donthave to specify the length or use `...` to infer the length

## loops

- go pnly supports for loops
- no paranthesis around the condition
- and you dont have t put all expressions inside the condition as long as u put hem in the body of the loop

## functions
