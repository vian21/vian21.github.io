# Lec 1

## negation &not;

if p is true, ¬p is False

### how to negate

1. it is not the case ,... (double negative)
1. no = 0 becomes >=1, there is at least one

## conjuctive(and) &and;

- `and` || `but`

  | p   | q   | or  |
  | --- | --- | --- |
  | T   | T   | T   |
  | T   | F   | F   |
  | F   | T   | F   |
  | F   | F   | F   |

## diconjuctive (Or) &or;

- `or` || `unless`

| p   | q   | or  |
| --- | --- | --- |
| T   | T   | T   |
| T   | F   | T   |
| F   | T   | T   |
| F   | F   | F   |

## Exclusive (or) &oplus;

- True when expressions differ
- True when inputs are odd 1
- anti same, when they are the same it is false
- False when even i.e 1 ^ 1 , 0 ^ 0

| Exp 1 | Exp 2 | XOR   |
| ----- | ----- | ----- |
| true  | True  | False |
| true  | False | True  |
| False | True  | True  |
| False | False | False |

## Conditional/ implication (https://www.mathgoodies.com/lessons/vol9/conditional)

- If p, then q
- Always true except when hypothesis is True and conclusion is false
- The necessary condition for p is q

| Exp 1 | Exp 2 | p -> q |
| ----- | ----- | ------ |
| true  | True  | True   |
| true  | False | False  |
| False | True  | True   |
| False | False | True   |

## [Biconditinal](https://en.wikipedia.org/wiki/Necessity_and_sufficiency)

- P if and only if Q
- True only if both are the same
- logical equivalent
- if p then q and converse
- if p then q and if q then p
- p is necessary and sufficient for q

| P   | q   | p <-> q |
| --- | --- | ------- |
| T   | T   | T       |
| T   | F   | F       |
| F   | T   | F       |
| F   | F   | T       |

## supercedence

| 1   | exp     |
| --- | ------- |
| 1   | &not;   |
| 2   | &and;   |
| 3   | &or;    |
| 4   | <->     |
| 4   | &oplus; |

## Terms

1. **Tautology**: always True
1. **contigency**: sometimes True, sometimes False
1. **Contradiction**: always False
1. counter example: an example that is false
