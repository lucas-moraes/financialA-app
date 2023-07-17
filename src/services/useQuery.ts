import { useQuery } from '@tanstack/react-query';
import { getMovimentInterface } from '../interface/getMoviment';
import { getMovimentGroupInterface } from '../interface/getMovimentGroup';
import { postMoviment } from '../interface/postMoviment';
import moment from 'moment';
import { movimentType } from '../constants/optionSelect';

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

export function RegisterData(data: postMoviment) {
  const formdata = new FormData();
  formdata.append('date', moment(data.date).format('YYYY-MM-DD'));
  formdata.append('type', movimentType[Number(data.moviment)]);
  formdata.append('category', data.categories);
  formdata.append('value', data.value);
  formdata.append('description', data.description);

  console.log('🚀 ~ file: useQuery.ts:54 ~ RegisterData ~ formdata:', formdata);

  fetch(`${process.env.SERVER}/backend/view/MovimentReg.php`, {
    method: 'POST',
    body: formdata,
  });
}
