export default class CalorieCounter {
  public static getTotalCalories(foodItems: number[]): number {
    return foodItems.reduce((a, b) => a + b, 0);
  }
}
