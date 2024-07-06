# Jest | Vitest

- To use jest with typescript use `ts-jest` and use their preset

# Why Vitest is better than Jest

1. easy to setup - npm install it and then run it
2. works better with module aliases. better than jest
3. Faster in watch mode compared to jest
4. Has the same features/syntax as jest

# 1. Describe(name, fn)

used to froup related tests

# 2. Test(name, fn)

This the test itself. `fn` is a lambda function

# 3. Matchers

## Expect(value).method(value)

- call the function you want to test in the expect bracket
- Add a matcher to the expect function

Link: https://jestjs.io/docs/using-matchers

# Remarks

it is better to place all your tests in one folder to prevent from mixingg your production code with your test code

- use modules alias in jest.config.js to avoid long relative paths. use `moudleNameMapper`
