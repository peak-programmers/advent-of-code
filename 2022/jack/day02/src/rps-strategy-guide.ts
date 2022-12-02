type GameScores = { [key: string]: number };

export default class RpsStrategyGuide {
  private static readonly gameScores: GameScores = {
    ['A X']: 4,
    ['A Y']: 8,
    ['A Z']: 3,
    ['B X']: 1,
    ['B Y']: 5,
    ['B Z']: 9,
    ['C X']: 7,
    ['C Y']: 2,
    ['C Z']: 6,
  };

  public static calculateTotalScore(games: string[]): number {
    return games.reduce(
      (acc: number, element: string) => acc + this.gameScores[element],
      0
    );
  }
}
