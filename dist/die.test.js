"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const die_1 = require("./die");
(0, ava_1.default)("New Die", (t) => {
    const d = new die_1.Die(1);
    t.is(d.dieId, 1);
    t.is(d.lastRoll, 0);
    t.is(d.previousRolls.length, 0);
});
(0, ava_1.default)("Die Roll", (t) => {
    const d = new die_1.Die(1);
    d.roll();
    t.is(d.previousRolls.length, 0);
    const lr = d.lastRoll;
    t.assert(lr > 0 && lr < 7);
    d.roll();
    const pr = d.previousRolls;
    t.is(pr.length, 1);
    t.assert(pr[0] == lr);
});
