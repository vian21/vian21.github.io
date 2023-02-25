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
