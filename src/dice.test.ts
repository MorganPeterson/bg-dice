import test from 'ava';

import { Dice } from './dice';

test("New Dice", (t) => {
    const d = new Dice('white', 'white');
    t.is(d.diceId, 'white');
    t.is(d.values.length, 3);
    t.is(d.values[0], 0);
    t.is(d.values[1], 0);
    t.is(d.values[2], 0);
})

test("Roll dice", (t) => {
    const d = new Dice('black', 'black');
    d.roll()
    t.is(d.values.length, 3);
    t.assert(d.values[0] > 0 && d.values[0] < 7);
    t.assert(d.values[1] > 0 && d.values[1] < 7);
    t.assert(d.values[0] + d.values[1] === d.values[2]);
})
