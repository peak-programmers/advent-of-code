export default class Food {
    
    #calories: number;

    constructor(calories: number) {
        this.#calories = calories;
    }

    get calories() {
        return this.#calories;
    }
}