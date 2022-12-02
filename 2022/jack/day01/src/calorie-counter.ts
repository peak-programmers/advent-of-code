export default class CalorieCounter {
  public static calculateMaxInventoryValue(elfInventories: number[][]): number {
    const sumInventoriesReducer = (
      acc: number[],
      element: number[]
    ): number[] => {
      return [...acc, this.sumCalories(element)];
    };

    return Math.max(...elfInventories.reduce(sumInventoriesReducer, []));
  }

  public static calculateSumOfTopThree(elfInventories: number[][]): number {
    const sumInventoriesReducer = (
      acc: number[],
      element: number[]
    ): number[] => {
      return [...acc, this.sumCalories(element)];
    };

    const sorted = elfInventories
      .reduce(sumInventoriesReducer, [])
      .sort((a, b) => b - a);

    return this.sumCalories([sorted[0], sorted[1], sorted[2]]);
  }

  private static sumInventoriesReducer(
    acc: number[],
    element: number[]
  ): number[] {
    return [...acc, this.sumCalories(element)];
  }

  private static sumCalories(foodItems: number[]): number {
    return foodItems.reduce((a: number, b: number) => a + b, 0);
  }
}
