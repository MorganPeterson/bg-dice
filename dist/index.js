"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDice = void 0;
const dice_1 = require("./dice");
function CreateDice(id, colorId) {
    return new dice_1.Dice(id, colorId);
}
exports.CreateDice = CreateDice;
