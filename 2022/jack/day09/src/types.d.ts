export type GridIndex = {
  row: number;
  col: number;
};

export type MotionData = {
  headEndPosition: GridIndex;
  tailEndPosition: GridIndex;
  tailVisitedPositions: GridIndex[];
};
