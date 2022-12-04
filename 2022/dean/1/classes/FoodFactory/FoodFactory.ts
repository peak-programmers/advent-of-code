import SimpleFactory from "@shared/SimpleFactory";
import Food from "../Food";
import { isNumber } from "@shared/utils";

export default class FoodFactory implements SimpleFactory {

    create(calories: string) {
        if (!isNumber(calories)) {
            throw Error('Calories must be numeric');
        }
        return new Food(parseFloat(calories));
    }
}