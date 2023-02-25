# React

## UseEffect

- works on numbers, strings, objects and json but not on `arrays`

```js
//runs everytime state is updated
useEffect(() => {
...
}, [state]);

//runs everytime props are updated.
useEffect(() => {
...
});

//runs only once
useEffect(() => {
...
},[]);

```
