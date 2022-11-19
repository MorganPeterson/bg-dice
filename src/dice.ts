import { Die } from "./die";

export declare type DieArray<N extends number, T> = N extends 0 ? never[] : {
    0: T;
    length: N;
} & ReadonlyArray<T>;

export declare type ColorId = 'white' | "black"

/** Class representing a pair of dice
 * @extends Object
*/
export class Dice extends Object {
    private id: string;
    private dice: DieArray<2, Die>;
    /**
     * Create a pair of dice
     * 
     * @param color -a boolean value that will either be white or black
     */
    constructor(id: string, color: ColorId) {
        super();
        const ids = color === 'white' ? [0, 1] : [2, 3];
        this.dice = [
            new Die(ids[0]),
            new Die(ids[1]),
        ]
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
        ]
    }

    get diceId() {
        return this.id;
    }
}