export type GetMovementInterface = {
  data: Movement;
  isLoading: boolean;
  isRefetching: boolean;
  refetch: () => void;
};

export type Movement = {
  moviment: moviment;
  total: string;
};

export type moviment = {
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
