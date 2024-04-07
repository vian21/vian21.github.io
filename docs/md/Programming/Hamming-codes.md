# Hamming Codes

- Error correcting codes

## Types

1. Parity check
2. XOR

## Parity Check

- The data is stored in a block of bits which contain bits of data that are used to verify the integrity of the data.

|     |     |     |     |
| --- | --- | --- | --- |
| 0   | x   | x   | 0   |
| x   | 0   | 0   | 0   |
| x   | 0   | 0   | 0   |
| 0   | 0   | 0   | 0   |

- m1 - in charge of the parity of the 2nd and last column. It is either a 0 or a 1 to make the sum an even or odd number
- m2 - in charge of the 3rd and last column.
- m4 - in charge of the 2nd ad 4th row
- m8 - in chage of the 3rd and 4th row

- The first cell is either left blank or used as a parity bit for the whole bit

- We need `log2(N)` parity bits for N bits of data in a block and the bigger the data the more space is saved

### checks

- Each column is checked if the integrity of the data is correct and represent as 0 or 1

- The aggregation of the result gives you the address of the error. eg 1010 = error in position 10

## XOR

- preferred for software implementations

- Parity bits' values are determined by XORing together all data bits and then changing the values of the parity bits to make the whole expression evaluate to 0000

- When the data is received, a simple XOR of the data will reveal where the error occurred and can then be corrected
