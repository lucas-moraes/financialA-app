export type PostMovement = {
  date: Date;
  categories: number;
  movement: string;
  value: number;
  description: string;
};

export type FilterMovement = {
  month: number;
  year: number;
};
