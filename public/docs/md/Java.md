# Java - ITI 1521

## Base syntax

```java
public class NameOfFile{
    public static void main(string[] args){ //has to be like this
        System.out.println("Hello World");
    }
}
```

## Terms

1. Public
   - Access Specifier. indicates that methods and attributes of the class will be accessible from outside
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
