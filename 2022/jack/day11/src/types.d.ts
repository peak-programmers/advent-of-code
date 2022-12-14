export type MonkeyState = {
  items: number[];
  operation: (oldWorry: number) => number;
  test: (worry: number) => number;
};
