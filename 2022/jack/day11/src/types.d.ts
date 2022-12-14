export type MonkeyState = {
  items: number[];
  operation: (oldWorry: number) => number;
  test: (worry: number) => number;
};

export type ThrownItem = {
  monkey: number;
  item: number;
};
