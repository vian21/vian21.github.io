# Clean code

by Uncle Bob Martin

## Testing - Test Driven Development (TDD)

3 fundamental laws

1. Write just one test that fails
2. Write only code that makes the test pass
3.

## Dependecy injection

- your code should not rely on a specific framework or database
- Funvtions should not use or modify global variables but instead pass them as parameters and return a value instead of modifying global variables

## There will always be code

- "`Later equals never`", LeBlanc's Law

- code should be cleaned on a regular basis dont wait for a later time
- dont hurry to meet deadlines and write bad code. Bad code will slow yuou down eventually

Ron jeffries
clean code: - runs all tests - contains no `duplication` - minimizes the number of entities such as classes, functionss, etc,..

- singleton entities. an object or function should only do one thing
- abstraction and dependency injection to enable making chnages to the underlying framework

# Naming

## Classes | Objects

- classes should in camel case
- classes | objecto should not contain any verb

## methods

- should contain a verb eg. set, get, isEqual, delete, take, print, ....

# Functions

- Functions should do only one thing and do it well

## parameters

- functions should have the least number of parameters or none
- Never pass flags to a functions i.e true or false parameters to do one thing when it is one state but this breaks the definition of a function

### Types of functions

1. Monadic - function with one parameter
2. Diadic - function with 2
3. triadic - with 3 and should be avoided at all costs

# Comments

- comments are a sign of bad code anf that the developer could not express humself clearly in code
- You should never add a comment to explain code i.e it is bad code.
- Comments should be placed to explain RegEx, warn or inform other developers why a certain implementation was used
- None the less code should be self explanatory

## FUnction order

- caller above callee
- Instance variable should be declared in one place either at the top of the file or bottom
- Preferably, at the top and not scattered through the implementation
