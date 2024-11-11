# Rust lang

## Datatypes

Rust supports the following datatypes

1. integers: `i8`,`i16`,`i32`,`i64`, `i128`, `isize` and their unsigned counterpart

```rust
//Signed integers
x:i32 = 12;
x:i64=-12

//unsigned
x:u32 =12;
x:u64=12221212;

//compiler defined length - let the compile decide based on the architecture
x:isize=+-12;
z:usize=12;
```

1. floats: `f32`, `f64`
1. boolean: `isRobot:bool=true`

## strings

## Arrays, tuples & lits

## Structs

structs are like class in other programming languages

```rust
struct Rectangle{
    length:i32,
    width:i32
}

//adding methods to structs
impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
    fn another()->returnType{}
}

fn main(){
    let rect= Rectangle{
        width:30,
        length:20
    }

    println!(rect.width, rect.length)
    println!("Area of rectangle is : {}", area(&rect)) //pass reference to the object
}

fn area(rectangle: &Rectangle) -> u32 {
rectangle.width * rectangle.height
}
```

### impl

0 you can have multiple impl blocks or put all associated methods in one file

### enums

- enums allow you to define custom types with a known number of options/ `variants`. e.g: Gender::Male | Gender::Female

```rust
enum Gender{
    Male,
    Female
}

struct Person{
    gender: Gender,
    age: i32,
    name: String
}
```

- you can also put data inside an enum

```rust
enum IpAddr {
    V4(String),
    V6(String),
}

let home = IpAddr::V4(String::from("127.0.0.1"));
let loopback = IpAddr::V6(String::from("::1"));
```
