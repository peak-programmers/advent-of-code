import { readFileSync } from 'fs';
import Elf from '../Elf';
import Food from '../Food';

export default class InputLoader {

  load(path: string) {
    const input = readFileSync(path, 'utf-8');
    const caloriesStrings = input.split('\n\n').map((group) => group.split('\n'));
    const groupedFood = caloriesStrings.map((calories) => this.#createFood(calories));
    const elves = groupedFood.map((group) => this.#createElf(group));
    return elves;
  }

  #createFood(calories: string[]) {
    return calories.map((cals) => new Food(+cals));
  }

  #createElf(group: Food[]) {
    const elf = new Elf();
    group.forEach((food) => elf.addFood(food));
    return elf;
  }
}