"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Die = void 0;
const dieMax = 6;
const dieMin = 1;
/** Class representing a single die
 * @extends Object
*/
class Die extends Object {
    /**
     * Create a die
     *
     * @param id - id number of the die
     */
    constructor(id) {
        super();
        this.id = id;
        this.value = 0;
        this.previous = [];
    }
    /**
     * Roll the die to create value
     */
    roll() {
        if (this.value != 0) {
            this.previous.push(this.value);
        }
        this.value = Math.floor(Math.random() * (dieMax - dieMin + 1) + dieMin);
    }
    /**
     * Get the value of the last roll
     */
    get lastRoll() {
        return this.value;
    }
    /**
     * Get an array of previous rolls
     */
    get previousRolls() {
        return this.previous;
    }
    /**
     * Get the id number of the die
     */
    get dieId() {
        return this.id;
    }
}
exports.Die = Die;
