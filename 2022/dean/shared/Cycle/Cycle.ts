export default class Cycle {

    #index: number = -1;
    
    #elements: any[];
    #length: number;

    constructor(elements: any[]) {
        this.#elements = elements;
        this.#length = elements.length;
    }

    get next() {
        this.#index += 1;
        return this.#elements[this.#index % this.#length];
    }
}