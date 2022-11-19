"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dice = void 0;
const die_1 = require("./die");
/** Class representing a pair of dice
 * @extends Object
*/
class Dice extends Object {
    /**
     * Create a pair of dice
     *
     * @param color -a boolean value that will either be white or black
     */
    constructor(id, color) {
        super();
        const ids = color === 'white' ? [0, 1] : [2, 3];
        this.dice = [
            new die_1.Die(ids[0]),
            new die_1.Die(ids[1]),
        ];
        this.id = id;
    }
    /**
     * Roll the dice to get values
     */
    roll() {
        for (let i = 0; i < 2; i++) {
            this.dice[i].roll();
        }
    }
    /**
     * Get the values of the last roll
     *
     * @returns both die values plus the total value of the two added together.
     */
    get values() {
        return [
            this.dice[0].lastRoll,
            this.dice[1].lastRoll,
            this.dice[0].lastRoll + this.dice[1].lastRoll,
        ];
    }
    get diceId() {
        return this.id;
    }
}
exports.Dice = Dice;
