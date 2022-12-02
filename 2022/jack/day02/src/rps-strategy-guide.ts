type GameScores = { [key: string]: number };

export default class RpsStrategyGuide {
  private static readonly gameScores: GameScores = {
    ['A X']: 4,
    ['A Y']: 8,
  };

  public static calculateScore(game: string) {
    return this.gameScores[game];
  }
}
