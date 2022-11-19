/** Class representing a single die
 * @extends Object
*/
export declare class Die extends Object {
    private id;
    private value;
    private previous;
    /**
     * Create a die
     *
     * @param id - id number of the die
     */
    constructor(id: number);
    /**
     * Roll the die to create value
     */
    roll(): void;
    /**
     * Get the value of the last roll
     */
    get lastRoll(): number;
    /**
     * Get an array of previous rolls
     */
    get previousRolls(): number[];
    /**
     * Get the id number of the die
     */
    get dieId(): number;
}
