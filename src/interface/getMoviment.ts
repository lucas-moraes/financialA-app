export type getMovimentInterface = {
  data: {
    moviment: {
      id: number;
      dia: number;
      mes: number;
      ano: number;
      tipo: string;
      categoria: string;
      descricao: string;
      valor: number;
      length: number;
    };
    total: string;
  };
  isLoading: boolean;
};
