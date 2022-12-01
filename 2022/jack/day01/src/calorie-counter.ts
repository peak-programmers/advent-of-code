export default class CalorieCounter {
  public static getMaxInventoryValue(elfInventories: number[][]): number {
    const sumInventoriesReducer = (
      acc: number[],
      element: number[]
    ): number[] => {
      return [...acc, this.sumCalories(element)];
    };

    return Math.max(...elfInventories.reduce(sumInventoriesReducer, []));
  }

  private static sumCalories(foodItems: number[]): number {
    return foodItems.reduce((a: number, b: number) => a + b, 0);
  }
}
