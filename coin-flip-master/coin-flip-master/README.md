# coin-flip
A Random Number Generator Function.

### How to test it?
1- Clone / Download the Project

2- Run the project.
- With yarn:

      Run `yarn start`

- With npm:

      Run `npm run start`

3- Enjoy!

### How to make changes to the implementation or add test cases?
As the project uses typescript, you'll need to do the following steps:

1- Clone / Download the Project

2- Install dependencies

- With yarn:

      Run `yarn`

- With npm:

      Run `npm i` or `npm install`

3- Add your modifications.

4- Run the project in dev mode. This will transpile typescript into common javascript and run the result.
- With yarn:

      Run `yarn dev`

- With npm:

      Run `npm run dev`

5- Enjoy!


### Description
This project implements a function that generates a random number greater than or equal to 0, and less than input n.

The implemented function follows the next considerations:
- n must be greater than 0
- n must be less than 1,000,000
- The only source of randomness its an already implemented flip() function
- The implementation does not use Math.random

### Usage
An example execution of the function would be:
```
randomNumber(500) // returns 123

randomNumber(1) // returns 0

randomNumber(500) // returns 466

randomNumber(1000001) // throws error
```