import { useQuery } from '@tanstack/react-query';
import { getMovimentInterface } from '../interface/getMoviment';
import { getMovimentGroupInterface } from '../interface/getMovimentGroup';

export function GetMoviment() {
  return useQuery({
    queryKey: ['moviment'],
    queryFn: () => fetch(`${process.env.SERVER}/backend/view/MovimentGet.php`).then(res => res.json()),
  }) as unknown as getMovimentInterface;
}

export function GetMovimentGroup() {
  return useQuery({
    queryKey: ['movimentGroup'],
    queryFn: () => fetch(`${process.env.SERVER}/backend/view/MovimentGetGroup.php`).then(res => res.json()),
  }) as unknown as getMovimentGroupInterface;
}

export function GetCategories() {
  const categories = [] as unknown as [
    {
      value: number;
      label: string;
    },
  ];
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch(`${process.env.SERVER}/backend/view/CategoryGet.php`).then(res => res.json()),
  });

  data?.categoria?.forEach((item: any) => {
    categories.push({ label: item.descricao, value: item.id });
  });

  return categories;
}
