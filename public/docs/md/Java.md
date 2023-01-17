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

- int
- double
- float
- long

### Strings

- String
- char

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

## Variables

1. Naming
   - can start with almost any character except `#`
   - can include numbers, letters, special characters

## Methods

- static methods can be accessed without crearting an object

- public object need to be called on an instance of an object

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
