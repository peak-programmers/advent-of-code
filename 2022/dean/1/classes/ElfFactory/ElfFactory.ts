import SimpleFactory from "@shared/SimpleFactory";
import Elf from "../Elf";
import { FoodFactory } from "../FoodFactory";

export default class ElfFactory implements SimpleFactory {

    #foodFactory: FoodFactory = new FoodFactory();

    create(foodStrings: string[]) {
        const elf = new Elf();
        const food = foodStrings.map((calories) => this.#foodFactory.create(calories));
        food.forEach((item) => elf.addFood(item));
        return elf;
    }
} 