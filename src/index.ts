import {Dice} from "./dice";
import type { ColorId } from './dice';

function CreateDice(id: string, colorId: ColorId): Dice {
    return new Dice(id, colorId)
}

export { CreateDice }