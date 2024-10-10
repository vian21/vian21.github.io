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

## Function order

- caller above callee
- Instance variable should be declared in one place either at the top of the file or bottom
- Preferably, at the top and not scattered through the implementation

## Classes vs Objects

- `Objects`: objects hide their data behing absractions and provide functions to operate on them
- `Data structure`: data structures expose their data and have no meaningful functions

- Procedural programming makes it easier to add new functions and makes it harder to add new data structures
- OOP makes is easy to add new class/data structures while making it harder to add new functions. They have to be overloaded in inherited classes.

- objects are set of functions that operate on implied data elements
- data structures are set of data elements operated on by implied functions

## Boundaries

- setting boundaries between code you won and code you dont own

### 1. Wroking with undocumented library

- setup interfaces for the `perfect` API and when the code comes live declare function that implement those interfaces.
- Always prefer to use code that you own and wrote than relying on third party libraries that could break down your system in an update.
- Test software you dont own. `Learning tests`
- Having interfaces for software you dont own makes it easier for you to seamlessly change implementation and library.
- "Good software designs accomodate change without huge investments and work"
- code at Boundaries is the most critical and we must ensure there is a clear separation of concerns between our software and third party libraries.
- Our code should not know anything about third party libraries
- `It is better to depend on something you control than depending on something you dont, lest it ends up controlling you`

# TDD- Test Driven Development

## 3 laws of TDD

1. `First Law`: Dont write code before writing a unit test that fails
1. `Second Law`: Dont write more that a unit test that makes the test to fail (a test at a time)
1. `Third Law`: Dont write more code than is sufficient to make the test pass.

## Tests

- Tests are as important as production code.
- You should not write quick and dirty tests
- Test gives production code flexibility to change since they allow you to modify production code knowing that if there are any errors they will be caught
- So stick to TDD
- Good test writing follows this workflow

#### `Build` -> `Operate` -> `Check`

1. Build: instanciate the required object or mock the classes being tested
2. Operate: Pass data to the function being tested
3. Check: check if the output is the same as the expected one.
