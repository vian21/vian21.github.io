# Java - ITI 1521

## Base syntax

```java
public class NameOfFile{
    public static void main(string[] args){ //has to be like this
        System.out.println("Hello World");
    }
}
```

## Types

### Numbers

- int (Integer)
- double (Double)
- float (Float)
- long (Long)

### Strings

- String
- char (Character)

### Boolean

- boolean

### Arrays

- values are mutable
- size is fixed/immutable

```java
int[] array = new int[10]; //defining length of the array

// or

int[] array= new int[];

String[] array = new String[10];
```

### .length

get length of array. `array.length`

## Terms

1. Public
   - Access Specifier. Indicates that methods and attributes of the class will be accessible from outside
2. static
   - Specifies that a variable or a method belongs to the class, rather than a specific instance
   - Like a class variable. all instances of the class will share this value, if it is changed in one, it will affect all others
3. method signature: -`A function's signatures is the number of params and their types`

4. public: can be accessed by anyone and inherited by subclasses
5. private: can only be accessed by the class itself and can not be inherited by subclasses
6. protected: can only be accessed by the class itself and can be inherited subclasses

## Variables

1. Naming
   - can start with almost any character except `#`
   - can include numbers, letters, special characters

## Methods

### Static keyword

- static methods can be accessed without creating an object
- static variable/method is shared by all instances of the class. they belong to the class not a specific object
- if a static variable is changed all object see the change made to the class

### this dot

- used to explicitly specify the modification of a certain object variable.

- can not be used in a static method

- can be used to modify a static variable in a non-static method.

- can also be used for static variables.

## Packages

```java
package [package.name];
```

## Strings

### substring(start, end=length-1)

Both start and end are inclusive

```java
String s = "Hello World";
System.out.println(s.substring(0, 4)); //prints "Hell"
```

## IO

### Scanner

```java
import java.util.Scanner;
//in main
Scanner sc = new Scanner(System.in);
String s = sc.nextLine(); //multiple words
String s = sc.next(); //a single word
int i = sc.nextInt();
double d = sc.nextDouble();
sc.close();
```

### Scanner.close()

- allow Java to garbage collect the object
- close the stream to prevent memory leaks

## Classes

### Interface

- can not be instantiated
- can only contain abstract methods
- can not implement methods

### Abstract class

- can not be instantiated
- can implement methods or leave them abstract

```java
public interface Vertebrate{
    public void height;
    public int limbs;
    public void walk();
}

abstract class Human implements Vertebrate{
    public void walk(){
        System.out.println("I can walk");
    }
    public int limbs = 2;
    public void height;
}

 class Male extends Human{
    Human(int height){
        this.height = height;
    }

}
```

## Polymorphism

- 3 types:

### 1. Ad hoc

overloading a method with the same name and different parameters

```java
public int sum(int a, int b){
    return a+b;
}
public int sum(int a, int b, int c){
    return a+b+c;
}
//same name but differnt parameters and return type
public double sum(double a, double b, double c){
    return a+b+c;
}
```

### 2. Subtyping/overloading

overriding a method in a subclass. The method is redifined in the child class

```java
/**
* Polymorphism by subtyping
*/
class Mammal{
    public void name(){
        System.out.println("Mammal");
    }
}

class Human extends Mamal{
    //name is overriden and redifined
    public void name(){
        System.out.println("Human");
    }
}
```

- can declare a parent object from a child class but not conversely.

### Overloading vs Overriding

- overloading is when you have multiple methods with the same name but different parameters. i.e Ad Hoc
- overriding/redefining is when you have a method in a parent class and you override it in a child class. i.e Subtyping. Must have same signature otherwise it is overloading parent class method.

### 3. Parametric/ generic typing

- <T> : a generic type which can be anything at run time. `int`, `double` ,....

```java
class Couple<T>{
    T a;
    T b;
    Couple(T a, T b){
        this.a = a;
        this.b = b;
    }
}

class Main{
    public static void main(String[] args){
        Couple<Integer> c = new Couple<Integer>(1,2);
        Couple<String> c = new Couple<String>("Hello", "World");
    }
}
```

- generates a generic class which can be used with any type

```java
class Main{
    public static <T> void display(T[] array){
        for(T element: array){
            System.out.println(element);
        }
    }

    public static void main(String[] args){
        Integer[] array = {1,2,3,4,5};
        display(array);
        Strint[] array = {"Hello", "World"};
        display(array);
    }
}
```

```zsh
1
2
3
4
5
Hello
World
```

## Why And When To Use Interfaces?

1. Java does not allow inheriting from multiple classes. But it allows implementing multiple interfaces.

```java
interface A{
    public void methodA();
}
interface B{
    public void methodB();
}
// C can implement both A and B
class C implements A, B{
    public void methodA(){
        System.out.println("Method A");
    }
    public void methodB(){
        System.out.println("Method B");
    }
}
```

# Stacks

basic ops:

- `push`
- `pop`
- `peek`: returns the top element of the stack without removing it
- `isEmpty`

- `Lexical analyser`: takes a string and breaks it into tokens
- `Syntax analyser`: takes tokens and checks if they are in the correct order and parses it

## Binary Trees

- A binary tree is a hierachical data structure made in a way such that every node has a value and two children nodes(left and right)
- Profondeur/ depth: is the number of nodes you have to traverse from the root to reach an element. The depth of the root is 0

### Functions

- contains
-

### contains(E element)

- uses a recursive algorithm to traverse tree until element is found
- traverse any direction first and stop when last element in that direction does not have an element in that direction
- ordered elements preferably. Greater than current value go right and vice versa

## Traversing a Binary Tree to get all elements

1. Pre-order/prefix: preOrder(Node): prints current element -> calls PreOrder(Node.left) -> calss preOrder(Node.right)
   - check root
   - check left
   - check right
1. Infix/ Symmetric:
   - check left
   - check root
   - check right
1. Suffix/post-order:
   - check left
   - check right
   - check root

- The above functions print all elements in the Btree in the order they are supposed to

- `Visit(E element)` -> Print this element without modifying it

## Binary Search Tree (BST)

- each element on the left is less than root
- each element right is greater than root
- each is element has references to child nodes (left & right)

- A BT is full if and only if all nodes has exactly 2 children
- `Complete Binary Tree`: all levels at depth(d)-1 are all complete and have two nodes and all noes are as left as possible
- Depth of Complete BT is log2(N) while in an unbalance Bt we would have to traverse N-1 connections.

## Lists

- ArrayList
  - made using an array
  - to add first element
- LinkedList:
  - `head` instance variable to keep track of the first element
  -
  - each element is a node with next attribute pointing to the next element
  - the last element points to a null pointer (indication of last element)
  - add instance variable `tail` makes it constant time to addd an element at the end of the array

### functions

---

| fn                             | ArryList | LinkedList |
| ------------------------------ | -------- | ---------- |
| void addFirst(E elem)          | variable | const      |
| void addLast(E elem)           | variable | const      |
| void add(int position, E elem) | variable | variable   |
| E get(int position)            | constant | variable   |
| void remove(int position)      | variable | variable   |
| void removeFirst()             | variable | constant   |
| void removeLast()              | const    | variable   |

- has to traversse list to reach last element
- solve removeLast time complexity of linkedList, use double linked List with a pointer pointin forward and backward

- `isEmpty()`
- `.clear()`: clear list
- `remove()` is variable because u need to resize array to free the memory and not use memory for nothing

- `size()`
  - better alternative is use an instance variable that counts the number of elements `.count`

### comparison

- Arraylist takes more space at first compared to LinkedList
- but after LinkedList uses more space since it has a greater overhead(element + pointer to next)

## DoubleLinkedList

- every node has pointer forward and backward
- SPECIAL CASEs:
  - if list has one element, the element points to null on both sides
  - adding the second element. it must point to the head(first element)
- now `removeLast()` is constant time
