export default class CalorieCounter {
  public static calculateMaxInventoryValue(elfInventories: number[][]): number {
    return Math.max(...elfInventories.reduce(this.sumInventoriesReducer, []));
  }

  public static calculateSumOfTopThree(elfInventories: number[][]): number {
    const sortedCalorieSumDesc = elfInventories
      .reduce(this.sumInventoriesReducer, [])
      .sort((a, b) => b - a);

    return this.sumCalories(sortedCalorieSumDesc.slice(0, 3));
  }

  private static sumInventoriesReducer(
    acc: number[],
    element: number[]
  ): number[] {
    return [...acc, CalorieCounter.sumCalories(element)];
  }

  public static sumCalories(inventory: number[]): number {
    return inventory.reduce((a: number, b: number) => a + b, 0);
  }
}
