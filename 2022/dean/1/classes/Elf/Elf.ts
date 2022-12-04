import Food from "../Food";

export default class Elf {

    #food: Food[] = [];

    get caloriesHeld() {
        return this.#food.reduce((acc, item) => acc + item.calories, 0);
    }

    addFood(food: Food) {
        this.#food.push(food);
    }
}