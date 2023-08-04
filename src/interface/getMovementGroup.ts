export type GetMovementGroupInterface = {
  data: {
    mes: number | null;
    ano: number | null;
    totalResume: number;
    categoriesByYear: {
      categoria: string;
      valor: number;
      length: number;
    };
    totalCategoriesByYear: string;
    groupMonth: {
      mes: number;
      ano: number;
      valor: number;
    };
  };
  isLoading: boolean;
};
