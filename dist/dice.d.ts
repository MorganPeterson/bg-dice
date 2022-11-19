export declare type DieArray<N extends number, T> = N extends 0 ? never[] : {
    0: T;
    length: N;
} & ReadonlyArray<T>;
export declare type ColorId = 'white' | "black";
/** Class representing a pair of dice
 * @extends Object
*/
export declare class Dice extends Object {
    private id;
    private dice;
    /**
     * Create a pair of dice
     *
     * @param color -a boolean value that will either be white or black
     */
    constructor(id: string, color: ColorId);
    /**
     * Roll the dice to get values
     */
    roll(): void;
    /**
     * Get the values of the last roll
     *
     * @returns both die values plus the total value of the two added together.
     */
    get values(): number[];
    get diceId(): string;
}
