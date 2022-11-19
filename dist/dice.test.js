"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const dice_1 = require("./dice");
(0, ava_1.default)("New Dice", (t) => {
    const d = new dice_1.Dice('white', 'white');
    t.is(d.diceId, 'white');
    t.is(d.values.length, 3);
    t.is(d.values[0], 0);
    t.is(d.values[1], 0);
    t.is(d.values[2], 0);
});
(0, ava_1.default)("Roll dice", (t) => {
    const d = new dice_1.Dice('black', 'black');
    d.roll();
    t.is(d.values.length, 3);
    t.assert(d.values[0] > 0 && d.values[0] < 7);
    t.assert(d.values[1] > 0 && d.values[1] < 7);
    t.assert(d.values[0] + d.values[1] === d.values[2]);
});
