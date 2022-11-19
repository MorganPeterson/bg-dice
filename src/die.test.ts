import test from 'ava';

import { Die } from './die';

test("New Die", (t) => {
    const d = new Die(1);
    t.is(d.dieId, 1);
    t.is(d.lastRoll, 0);
    t.is(d.previousRolls.length, 0);
})

test("Die Roll", (t) => {
    const d = new Die(1);
    d.roll()
    t.is(d.previousRolls.length, 0);
    const lr = d.lastRoll;
    t.assert(lr > 0 && lr < 7);
    d.roll()
    const pr = d.previousRolls
    t.is(pr.length, 1);
    t.assert(pr[0] == lr);
})