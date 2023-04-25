Mon, 16 Jan

# [De Morgan's law](https://en.wikipedia.org/wiki/De_Morgan%27s_laws)

- statements that are equivalent

```
not (p and q) = not p or not q
not (p or q) = not p and not q
```

## Quantifiers

## For all & Existential(There exists)

### For all

### Existential

- there exists such that
- must have such that after there exists

## negation

- For ALL -> There exists
- = -> !=

## Making a truth table

- nUmber of rows = 2^n
- 2 expr = 4 rows
- 3 expr = 8 rows
- 4 expr = 16 rows
  ...
- start with formost right column
  - alternate true and false
- Move left to next column
  - do as twice as many true and twice as many false i.e T T F F T T F F
- next left
  - Twice as many trues and twice as many falses i.e T T T T F F F F ...

| p   | q   | x   |
| --- | --- | --- |
| T   | T   | T   |
| T   | T   | F   |
| T   | F   | T   |
| T   | F   | F   |
| F   | T   | T   |
| F   | T   | F   |
| F   | F   | T   |
| F   | F   | F   |
