# Backgammon Dice

BG-Dice is a simple Javascript package to create and use sets of dice in a game. In particular, this package was designed to be used in future designs of backgammon games for me.

## Usage

```javascript
import { CreateDice } from 'bg-dice';

const user1Dice = CreateDice('player1', 'white');

u1Results = user1Dice.roll();

// u1Results[0] === [first die result as an inclusive 1-6]
// u1Results[1] === [second die result as an inclusive 1-6]
// u1Results[2] === [total of both dice added togheter]
```

## Tests

```bash
$ npm run test
```